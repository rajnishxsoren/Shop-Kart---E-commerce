import stripe from '../../config/stripe.js';

const endpointSecret = 'whsec_...';

const getLineItems = async (lineItems)=>{
    let productItems = [];
    if(lineItems?.data?.length){
        for( const item of lineItems?.data){
         const product = await stripe.products.retrieve(item.price.product);

         const productId = product.metadata.productId;

         const productData = {
            productId : productId,
            name : product.name,
            price : item.price.unit_amount / 100,
            quantity : item.quantity,
            image : product.image
         }

         productItems.push(productData);
        }
    }
    return productItems;
}

const webHookController = async (req,res)=>{
const sig = req.headers['stripe-signature'];
 const payloadString = JSON.stringify(req.body);

 const header = stripe.webhooks.generateTestHeaderString({
    payload : payloadString,
    secret : endpointSecret
 });

 let event;
 try {
    
    event = stripe.webhooks.constructEvent(payloadString,header,endpointSecret)

 } catch (err) {
   return  res.status(400).send(`WebHook Error : ${err.message}`);

 }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;

      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
     const productDetails = await getLineItems(lineItems);
     

      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }

 res.status(200).send();

}

export default webHookController;
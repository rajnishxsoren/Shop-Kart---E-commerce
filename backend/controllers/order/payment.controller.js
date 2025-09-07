import stripe from '../../config/stripe.js';
import UserModel from '../../models/user.model.js';

const paymentController = async (req,res)=>{

    try {
         const {cardItems} = req.body;
        //   console.log(cardItems);
          
         const user = await UserModel.findOne({
          _id : req.userId
         });

         const params ={
             submit_type : 'pay',
             mode : 'payment',
             payment_method_types : ['card'],
             billing_address_collection : 'auto',
             shipping_options : [
                {
                    shipping_rate : 'shr_1QdS0HH2MBJzYZeaM17m4pgs'
                }
             ],
             customer_email : user.email,
             metadata : {
                 userId : req.userId
             },
             line_items : cardItems.map((item,idx)=>{
                return {
                    price_data : {
                        currency : 'inr',
                        product_data : {
                            name : item.productId.productName,
                            images : item.productId.productImage,
                            metadata : {
                                productId : item.productId._id
                            }
                        },
                        unit_amount : item.productId.sellingPrice *100
                    },
                    adjustable_quantity : {
                        enabled : true,
                        minimum : 1
                    },
                    quantity : item.quantity
                }
             }),

             success_url : `${process.env.FRONTEND_URL}/success`,
             cancel_url : `${process.env.FRONTEND_URL}/cancel`,
         }
            const session = await stripe.checkout.sessions.create(params);

            return res.status(303).json(session);

    } catch (error) {
        res.json({
            message : error?.message || error,
            error : true,
            success : false
        })
    }
}

export default paymentController;
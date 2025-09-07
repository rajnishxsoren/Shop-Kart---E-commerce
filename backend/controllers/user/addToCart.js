import addToCartModel from "../../models/addToCart.model.js";

const addToCartController = async (req, res)=>{
   try {

    const {productId} = req?.body;
    const currentUser = req.userId;
     
    const isProductAvailable = await addToCartModel.findOne({productId , userId : currentUser});

    if(isProductAvailable){
        return res.json({
            message : "Already exist is  Card List",
            success : true,
            error : true
        })
    }

    const payload={
        productId : productId,
        quantity : 1,
        userId : currentUser
    }
    const newAddToCard = new addToCartModel(payload);
    const saveProduct = await newAddToCard.save();
      return res.status(200).json({
        message : "Product Added to Card",
        success : true,
        error : false,
        data : saveProduct
      });
    
   } catch (err) {
        res.status(500).json({
            message: err.message,
            success: false,
            error : true
        })
   }
}

export default addToCartController;


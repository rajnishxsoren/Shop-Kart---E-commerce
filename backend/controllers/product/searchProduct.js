import productModel from "../../models/product.model.js";

const searchProductController = async (req,res)=>{
    try {
       
        const query = req.query.q;
        const regex = new RegExp(query,'i','g');

        const product = await productModel.find({
            "$or" : [
                {
                    productName : regex
                },{
                    catagory : regex
                },{
                    brandName : regex
                }
            ]
        });

        res.status(200).json({
            data : product,
            message : "Search Product List",
            success : true,
            error : false
        })
        
    } catch (err) {
          res.status(400).json({
            message : err.message,
            success : false,
            error : true
          })
    }
}

export default searchProductController;
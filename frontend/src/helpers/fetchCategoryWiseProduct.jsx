import Api from "../common/Api.jsx";

const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(Api.categoryALLProductList.url,{
        method : Api.categoryALLProductList.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}

export default fetchCategoryWiseProduct
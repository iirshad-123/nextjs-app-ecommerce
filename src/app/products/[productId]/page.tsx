
import { ProductService } from "@/app/services/product-services";
import AddToCartButton from "@/app/components/addtocart/AddToCartButton";
import './productdeatails.css'

import loading from "./loading";
async function ProductDetails(props:any) {
    const params=await props.params
    const productId=params.productId
    if(productId){
        var product=await ProductService.getProductById(productId)
    }


  return (
    <div className="prod-details">
      <div className="image-div">
         <img src={product.images[0]} width={89}alt="" />
      </div>
       <div
       className="prod-title"><h3>{product.title}</h3></div>
       <div className="prod-description">
        <h6>{product.description}</h6>
       </div>
        
        <h4>${product.category}</h4>
        <h4>${product.price.toFixed(2)}</h4>
        <AddToCartButton product={product} />
      
    </div>
  )
}

export default ProductDetails
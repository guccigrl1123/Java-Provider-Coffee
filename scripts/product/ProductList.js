import Product from "./Product.js"
import { useProducts } from "./productDataProvider.js"


const ProductList = () => {

    const contentElement = document.querySelector(".product_list")
    
    const productObjectArray = useProducts()

    for (const productObject of productObjectArray) {
     const landmarkHTMLRepresentation= Product(productObject)

     contentElement.innerHTML += landmarkHTMLRepresentation
    }
    
    }

    export default ProductList
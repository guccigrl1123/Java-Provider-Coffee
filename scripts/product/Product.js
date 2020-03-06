const Product = (productObject) => {
    return `
    <br>
     <ul>ID: ${productObject.id}</ul>
     <ul>Name: ${productObject.name}</ul>
     <ul>Bean Type: ${productObject.beanType}</ul>
     <ul>Roast Type: ${productObject.roastType}</ul>
     <ul>Price:$ ${productObject.price}</ul>
    <br>
    `
}

export default Product
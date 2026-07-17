async function fetchProducts(){
  //const response = await fetch("https://fakestoreapi.com/products",{cache: "no-store",});
  const response = await fetch("httPS://jsonplaceholder.typicode.com/posts",{cache: "no-store",});
  if(!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }
  let data     = await response.json()
  return data
}




export default async function ServerComponent(){
  
  let products =  await fetchProducts() 
  
  return(
    <div>
      <ul>
        {
         products.map(
          (product, index) => (
            <li key={index}>{product.title} - {product.price}</li>
          )
         )
        }

      </ul>

    </div>
  )
}

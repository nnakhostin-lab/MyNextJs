import { json } from "node:stream/consumers"

let products = [
  {name:"product a", price:"100"},
  {name:"product b", price:"200"},
]

export async function GET(request){
   try{
     return new Response(
       JSON.stringify(products),
       {status:200, headers:{"Content-Type":"application/json"}}
     )

   }catch(error){
      return new Response(
        JSON.stringify({"error": error}),
        {status:500, headers:{"Content-Type":"application/json"}}
      )
   }
}

export async function POST(request){
  try{
    let newPeroduct = await request.json()
    products.push(newPeroduct)
    return new Response(
      JSON.stringify({products}),
      {status:201, headers:{"Content-Type":"application/json"} }
    )

  }catch(error){
    return new Response(
      JSON.stringify({"alert":"invalid data"}),
      {status:400, headers:{"Content-Type":"application/json"}}
    )

  }
}

export async function PUT(request) {
  try{
    let updatedproduct= await request.json()
    let index= products.findIndex(
      (product)=> product.name == updatedproduct.name
    )
    if(index == -1){
      return new Response(
        JSON.stringify({"alert":"not found"}),
        {status:404}
      )
    }
    products[index]= updatedproduct
    return new Response (
      JSON.stringify(products),
      {status:200}
    )

  } catch(error){
    new Response(
      JSON.stringify({"alert":"invalid data"}),
      {status:400}
    )

  }
}
 
export async function DELETE(request) {
  try{
    let deletedproduct= await request.json()
    let index= products.findIndex(
      (product)=> product.name == deletedproduct.name
    )
    if(index == -1){
      return new Response(
        JSON.stringify({"alert":"not found"}),
        {status:404}
      )
    }
    products = products.filter(
      (product)=> product.name != deletedproduct.name
    )
    return new Response (
      JSON.stringify(products),
      {status:200}
    )

  } catch(error){
    new Response(
      JSON.stringify({"alert":"invalid data"}),
      {status:400}
    )

  }
  
}
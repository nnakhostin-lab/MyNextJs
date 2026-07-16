import { TEXT_PLAIN_CONTENT_TYPE_HEADER } from "next/dist/lib/constants";
import Link from "next/link";
//import Image from "next/image";

export default async function ProductDetail({params}){
  const products = [
    {id:1, name:'product 1', description:'this is product 1.', image:'/images/img1.jpeg'},
    {id:2, name:'product 2', description:'this is product 2.', image:'/images/img2.jpeg'},
    {id:3, name:'product 3', description:'this is product 3.', image:'/images/img3.jpeg'},
  ];
     
  let {id} = await params;
  let goalproduct = products.find(
    (nasser) => nasser.id == id
    );

  if(!goalproduct){
    return(
      <div>
        <h2>محصول مورد نظر وجود نداشت </h2>
      </div>
    );
  }
  return(
    <div >
      <h2>{goalproduct.name}</h2>
      <h3>{goalproduct.description}</h3>
      <img src={goalproduct.image} width="200" height="300" alt= {"عکس" + id} /> 
      <br /><br />
      <Link href="/product">go to products</Link>
    </div>
  )
}
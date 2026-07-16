import Link from "next/link";

export default function Product(){
  return(
   <div>
    <h1> Our Product</h1>
    <ul>
      <li>
        <Link href="/product/1">product 1</Link>
      </li>  
      <li>
        <Link href="/product/2">product 2</Link>
      </li>
      <li>
        <Link href="/product/3">product 3</Link>
      </li>
    </ul>
    <Link href="/">Back to Home Page</Link>
   </div>
  );
}
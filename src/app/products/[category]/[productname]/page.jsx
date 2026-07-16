import { ProductData } from "../../../data";
import { preconnect } from "next/dist/server/app-render/entry-base";

export default async function productDtail({params}){
    let {category,productname}= await params;
    const product=ProductData[category].find((nasser) => (nasser.name == productname))
    return(
        <div>
            {category} <br />
            {productname} <br />
            {product.price}
        </div>
    )
}

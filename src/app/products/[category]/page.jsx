import { ProductData } from "../../data"
import Link from "next/link"

export default async function categoryPage({params}){
    let {category} = await params
    let prod = ProductData[category]
    
    return(
        <div> 
          <ul>
            {
              prod.map(
                (product) => (
                    <li>
                      <Link href={`/products/${category}/${product.name}`}> {product.name} </Link>  
                    </li>  
                  
                )
              ) 
            }
          </ul>
        </div>       
    )
}
import Link from "next/link";
import ServerComponent from "./components/ServerComponent"

export default function Home() {
  return (
    
    //{getweather()}
    
    <div >
      <h1>this is home page</h1>
      <Link href="/about"><strong>go to about</strong> </Link>
      <br /><br />
      <Link href="/products"><strong>go to products</strong> </Link>
      <br /><br />
      <Link href="/weathershow"><strong>وضعیت آب و هوا</strong> </Link>
      <br /><br />
      <Link href="/blog"><strong>go to blog page</strong> </Link>
      <br /><br />
      <Link href="/usecomponents"><strong>پروزه شرکتی</strong> </Link>
      <br /><br />
      <Link href="/form"><strong> نمونه فرم </strong> </Link>
      <br /><br />
      <Link href="/liquidglass"><strong> نمونه: Liquid Glass Button</strong> </Link>


    </div>

  );
}

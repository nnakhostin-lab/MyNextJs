import Link from "next/link";
import ServerComponent from "../components/ServerComponent"
import ClientComponent from "../components/ClientComponent";

export default function UseComponents() {
  return (
    <div>
      <h1>   پروژه فروشگاه</h1>
      <ServerComponent/>
      <ClientComponent/>  
    </div>
  )
}

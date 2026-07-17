import Link from "next/link";
import ServerComponent from "../components/ServerComponent"
import ClientComponent from "../components/ClientComponent";
import UserServerComponent from "../components/UserServerComponent";

export default function UseComponents() {
  return (
    <div>
      <h1>   پروژه فروشگاه</h1>
      <h3> محصولات</h3>
      <ServerComponent/>
      <h3> کارمندان  </h3>
      <UserServerComponent/>
      <ClientComponent/>  
    </div>
  )
}

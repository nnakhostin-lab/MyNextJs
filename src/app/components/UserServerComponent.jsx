import Image from "next/image";

async function fetchUsers(){
  const response = await fetch("https://reqres.in/api/users",{headers: {"x-api-key":"reqres_86da083276a64c86a5deca70cc80f86b"}},{cache: "no-store",});
  if(!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }
  let result = await response.json()
  return result
}


export default async function UserServerComponent(){
  
  const result =  await fetchUsers() 
  const users = result.data
  return(
    <div>
      <ul>
        {
         users.map(
          (user) => (
            <li key={user.id}>
              <p> {user.first_name} {user.last_name}</p> 
              <Image
                src={user.avatar}
                alt={user.first_name} 
                width={100}
                height={100}
              />
            </li>           
          )
         )
        }

      </ul>

    </div>
  )
}

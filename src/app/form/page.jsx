"use client"
import { useState } from "react";

export default function app() {
  const [name,setName] = useState("");
  
  function handleSubmit(e) {
    e.peventDefault();
    alert(name);

  }
    return(
      <div>
        <h1> تست فرم </h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit"> ارسال </button>
        </form>
      <h2>{name}</h2>
      </div>
    )
}

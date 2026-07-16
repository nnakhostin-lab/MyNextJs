
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    city:"tehran",
    temperature: 41,
    weather: "sunny"
  });  
    
}


import Link from "next/link"; 
import StudentInfo  from "../student-info";
export default function Page (){
  return (
  <main>
    <h1> My Shopping List</h1>
    <p>
        <Link href="/">Home</Link >
    </p>
    <StudentInfo/>
  </main>
  );
} 

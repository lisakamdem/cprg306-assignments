'use client';

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
 
export default function SignAndSignOut() {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 

const handleSignIn = async () => {
    await gitHubSignIn();
};
const handleSignOut = async () => {
    await firebaseSignOut();
}
 
return (
    
    <div>
        {!user ? 
        (
            <>
                <p>
                 Welcome to the Shopping List App.
                </p>
               <button  className="no-underline hover:underline"onClick={handleSignIn}>Sign in with GitHub</button>

            </> 
       ) : (
        <>
            <p>Welcome, {user.displayName ? `${user.displayName} (${user.email})` : user.email}</p>
            <button className="no-underline hover:underline" onClick={handleSignOut}>Log Out</button>
            <p className="no-underline hover:underline"><Link href= "/week8/shopping-list">Shopping List</Link></p>
       </> )}
    </div>
  );
}
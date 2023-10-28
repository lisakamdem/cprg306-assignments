'use client';

import { useUserAuth } from "./_utils/auth-context";
 
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
      <p>
        Welcome, {user ? `${user.displayName} (${user.email})` : "Guest"}
      </p>
      <button onClick={handleSignIn}>Sign in with GitHub</button>
      <button onClick={handleSignOut}>Log Out</button>
    </div>
  );
}
// page.js
"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Sign-In Error:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-Out Error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      {!user ? (
        <button onClick={handleSignIn} className="bg-blue-500 text-white py-2 px-4 rounded">
          Login with GitHub
        </button>
      ) : (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut} className="bg-red-500 text-white py-2 px-4 rounded">
            Logout
          </button>
        </>
      )}
    </div>
  );
}

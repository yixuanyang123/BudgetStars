import React from "react";
import { Navigate } from "react-router-dom";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

const SignInPage: React.FC = () => {
  return (
    <div>
      <SignedIn>
        <Navigate to="/dashboard" replace />
      </SignedIn>
      <SignedOut>
        <SignIn path="/sign-in" routing="path" />
      </SignedOut>
    </div>
  );
};

export default SignInPage;
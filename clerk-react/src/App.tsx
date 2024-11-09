import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Demo from "./Demo/Demo.tsx";

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Demo>
          <UserButton />
        </Demo>
      </SignedIn>
    </header>
  );
}

export default App

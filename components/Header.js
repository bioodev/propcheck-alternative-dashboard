import styles from "/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Header = () => (
  <header className="w-full flex justify-between p-8">
    <div className="">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image src="/propcheck-logo-icon2.svg" width="32" height="32" alt="Logo" />
        <span className="font-bold text-2xl">Propcheck</span>
      </Link>
    </div>
    <div className="">
      <SignedOut>
        <Link className="rounded-lg border border-slate-400 p-2" href="/sign-in">Iniciar sesión</Link>
      </SignedOut>
      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/user"
          afterSignOutUrl="/"
          afterMultiSessionSingleSignOutUrl="/"
        />
      </SignedIn>
    </div>
  </header>
);

export default Header;

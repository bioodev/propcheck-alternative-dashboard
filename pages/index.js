// import styles from "/styles/Shared.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

const classLinks = "flex gap-4 p-2 rounded-lg border border-slate-200 justify-between items-center";
const classContainerLinks = "w-full";

const UserPageLink = () => (
  <Link href="/user" className={classLinks}>
    <img alt="Përfil de usuario" src="/icons/user-square-rounded.svg" />
    <div>
      <h3>Pefil de usuario</h3>
      <p>Completa tu datos personales</p>
    </div>
    <div className="">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const AddPropsLink = () => (
  <Link href="/list" className={classLinks}>
    <img alt="Agregar propiedades" src="/icons/home-plus.svg" />
    <div>
      <h3>Agregar propiedades</h3>
      <p>Ingresa los datos de tus propiedades</p>
    </div>
    <div className="">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const DashboardLink = () => (
  <Link href="/dashboard" className={classLinks} >
    <img alt="Tablero" src="/icons/chart-infographic.svg" />
    <div>
      <h3>Tablero</h3>
      <p>
        Administra la información de tus propiedades
      </p>
    </div>
    <div>
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up" className={classLinks}>
    <img alt="Sign up" src="/icons/user-plus.svg" />
    <div>
      <h3>Inicar sesión de usuario</h3>
      <p>Registrate e ingresa la información de tus propiedades</p>
    </div>
    <div className="">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const apiSample = `
import { getAuth } from "@clerk/nextjs/server";

export default function handler(req, res) {
  const { sessionId, userId } = getAuth(req);

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }
  return res.status(200).json({ id: userId });
};
`.trim();

// Main component using <SignedIn> and <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering
// depending on whether or not a visitor is signed in.
//
// https://clerk.dev/docs/component-reference/signed-in
const Main = () => (
  <main className="w-full flex flex-col justify-center items-center text-center">

    <h1 className="text-4xl bold">Propcheck</h1>

    <h2 className="text-lg italic">Propiedades siempre al día</h2>
    <SignedIn>
      <p className="">Has iniciado sesión correctamente</p>
    </SignedIn>
    <SignedOut>
      <p className="">Inicia sesión para comenzar</p>
    </SignedOut>

    <div className="max-w-xl flex flex-col items-center gap-2 p-2">
      <SignedIn>
        <div className={classContainerLinks}>
          <DashboardLink/>
        </div>
        <div className={classContainerLinks}>
          <AddPropsLink />
        </div>
        <div className={classContainerLinks}>
          <UserPageLink />
        </div>

      </SignedIn>
      <SignedOut>
        <div className="">
          <SignupLink />
        </div>
      </SignedOut>
    </div>

    <div className="">
      <Link
        href="#"
        target="_blank"
        rel="noopener"
        className=""
      >
        <span className="">Documentación</span>
      </Link>
      <Link href="#" target="_blank" rel="noopener" className="">
        <span className="">Contacto</span>
      </Link>
    </div>
  </main>
);

// Footer component
const Footer = () => (
  <footer className="flex w-full justify-center">
    <a
      href="https://propcheck.cl"
      target="_blank"
      rel="noopener"
    >
      Propcheck
    </a>
  </footer>
);

const Home = () => (
  <div className="">
    <Main />
    <Footer />
  </div>
);

export default Home;

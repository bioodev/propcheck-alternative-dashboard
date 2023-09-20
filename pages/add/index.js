// import styles from "/styles/Shared.module.css";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import React from "react";

const mockGetUserData = (userId) => {
  return Promise.resolve([{ id: "Numero usuario de nuestra db mysql", data:     {
    "propiedad": "Departamento",
    "comuna": "La Cisterna",
    "calle": "Colon",
    "numero": "6479",
    "depto": "1417",
    "eluz": "Enel",
    "nluz": "3363170-7",
    "eagua": "Aguas Andinas",
    "nagua": "2697095-4",
    "egas": "Metrogas",
    "ngas": "901503738",
    "rolmanzana": "2740",
    "rolpredio": "108"
  }, userId }]);
};

export const getServerSideProps = async ({ req, resolvedUrl }) => {
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient.users.getUser(userId) : null;

  console.log("Auth state:", getAuth(req));

  const userData = await mockGetUserData(userId);
  return { props: { ...buildClerkProps(req, { user }), userData } };
};

const DashboardPage = ({ userData }) => {
  const { isSignedIn, isLoaded, user } = useUser();

  // Code hightlighting
  React.useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  });
  // se recibe la data de usuario por props en ssr
  // informacion todavia como mockup
  console.log(userData)
  return (
    <div className="">
      <main className="">
        <h1>hola</h1>

{/* Muestra la informacion del usuario que recibio por props */}
        {/* <pre>
          <code className="language-js">
          {JSON.stringify(userData, null, 2)}
          </code>
        </pre> */}

      </main>
    </div>
  );
};

export default DashboardPage;

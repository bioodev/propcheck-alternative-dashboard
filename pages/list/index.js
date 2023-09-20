// import styles from "/styles/Shared.module.css";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import React from "react";
// import { mockGetUserDataProps } from "../../components/DataMockup";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import List from '../../components/List'

const mockGetUserDataProps = (userId) => {
  return Promise.resolve([{
      id: "Numero usuario de nuestra db mysql", data: [
          {
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
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Joaquin",
              "calle": "Santa Rosa",
              "numero": "2648",
              "depto": "1604A",
              "eluz": "Enel",
              "nluz": "3303043-6",
              "eagua": "Aguas Andinas",
              "nagua": "2634336-4",
              "egas": "Metrogas",
              "ngas": "500175989",
              "rolmanzana": "2740",
              "rolpredio": "147"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Joaquin",
              "calle": "Santa Rosa",
              "numero": "2648",
              "depto": "1304A",
              "eluz": "Enel",
              "nluz": "3303004-5",
              "eagua": "Aguas Andinas",
              "nagua": "2634496-4",
              "egas": "Metrogas",
              "ngas": "500175950",
              "rolmanzana": "2740",
              "rolpredio": "320"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Joaquin",
              "calle": "Santa Rosa",
              "numero": "2648",
              "depto": "713A",
              "eluz": "Enel",
              "nluz": "3302935-7",
              "eagua": "Aguas Andinas",
              "nagua": "2634462-k",
              "egas": "Metrogas",
              "ngas": "500175881",
              "rolmanzana": "2740",
              "rolpredio": "354"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Joaquin",
              "calle": "Santa Rosa",
              "numero": "2648",
              "depto": "408A",
              "eluz": "Enel",
              "nluz": "3302891-1",
              "eagua": "Aguas Andinas",
              "nagua": "2634496-4",
              "egas": "Metrogas",
              "ngas": "500175837",
              "rolmanzana": "2740",
              "rolpredio": "386"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Joaquin",
              "calle": "Santa Rosa",
              "numero": "2648",
              "depto": "1103B",
              "eluz": "Enel",
              "nluz": "3303181-5",
              "eagua": "Aguas Andinas",
              "nagua": "2634593-6",
              "egas": "Metrogas",
              "ngas": "500176126",
              "rolmanzana": "2902",
              "rolpredio": "234"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Joaquin",
              "calle": "Santa Rosa",
              "numero": "2648",
              "depto": "1404A",
              "eluz": "Enel",
              "nluz": "3303017-7",
              "eagua": "Aguas Andinas",
              "nagua": "2634362-3",
              "egas": "Metrogas",
              "ngas": "500175963",
              "rolmanzana": "2902",
              "rolpredio": "235"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Miguel",
              "calle": "Maria Auxiliadora",
              "numero": "721",
              "depto": "1001A",
              "eluz": "Enel",
              "nluz": "3342005-6",
              "eagua": "Aguas Andinas",
              "nagua": "2667219-8",
              "egas": "Metrogas",
              "ngas": "500203113",
              "rolmanzana": "530",
              "rolpredio": "245"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Miguel",
              "calle": "Maria Auxiliadora",
              "numero": "721",
              "depto": "1213A",
              "eluz": "Enel",
              "nluz": "3342043-9",
              "eagua": "Aguas Andinas",
              "nagua": "2667205-8",
              "egas": "Metrogas",
              "ngas": "500203151",
              "rolmanzana": "2902",
              "rolpredio": "239"
          },
          {
              "propiedad": "Departamento",
              "comuna": "San Miguel",
              "calle": "Maria Auxiliadora",
              "numero": "721",
              "depto": "901A",
              "eluz": "Enel",
              "nluz": "3341992-9",
              "eagua": "Aguas Andinas",
              "nagua": "2667232-5",
              "egas": "Metrogas",
              "ngas": "500203100",
              "rolmanzana": "530",
              "rolpredio": "248"
          }
      ], userId
  }]);
};

export const getServerSideProps = async ({ req, resolvedUrl }) => {
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient.users.getUser(userId) : null;

  console.log("Auth state:", getAuth(req));

  const userData = await mockGetUserDataProps(userId);
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

  return (
    <div className="grid grid-cols-6 w-full">
      <div className="col-span-1">
        <h1>hola</h1>

      </div>
      <div className="col-span-5">
        <List data={userData} />
      </div>
    </div>
  );
};

export default DashboardPage;

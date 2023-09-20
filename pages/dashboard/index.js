// import styles from "/styles/Shared.module.css";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import React from "react";
import ChartDonut from "../../components/ChartDonut"
import {ChartData, ChartData2, ChartData3, ChartData4, ChartData5, ChartData6} from "../../components/DataMockup";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const mockGetUserData = (userId) => {
  return Promise.resolve([{
    id: "Numero usuario de nuestra db mysql", data: {
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
    }, userId
  }]);
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
    <div className="grid grid-cols-6 w-full">
      <div className="col-span-1">
        <h1>hola</h1>

      </div>
      <div className="col-span-5">
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
          <ChartDonut title="Resumen" chartData={ChartData} />
          <ChartDonut title="Agua" chartData={ChartData2} />
          <ChartDonut title="Luz" chartData={ChartData3} />
          <ChartDonut title="Electricidad" chartData={ChartData4} />
          <ChartDonut title="Contribuciones" chartData={ChartData5} />
          <ChartDonut title="Otros" chartData={ChartData6} />
        </Grid>


      </div>
    </div>
  );
};

export default DashboardPage;

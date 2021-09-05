import React, { useState } from "react";
import Countries from "../../assets/countries.svg";
import Vehicles from "../../assets/vehicles.svg";
import TableCard from "../../components/TableCard";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  const [tableSelected, setTableSelected] = useState({
    title: "",
    wasChosen: false,
  });

  return (
    <Layout title="Home page">
      <section className="flex flex-row gap-7 justify-center h-3/4 align-bottom items-end">
        <TableCard
          title="Countries"
          imgSRC={Countries}
          setTable={setTableSelected}
          tableSelectedTitle={tableSelected.title}
        />
        <TableCard
          title="Vehicles"
          imgSRC={Vehicles}
          setTable={setTableSelected}
          tableSelectedTitle={tableSelected.title}
        />
      </section>
      <Link
        className={
          tableSelected.title === ""
            ? "hidden"
            : "visible" +
              " flex justify-center items-center rounded-lg h-20 w-56 self-center bg-secondary font-button font-extrabold text-center text-4xl text-white mt-5 mx-auto"
        }
        to={`/${tableSelected.title}`}
      >
        SHOW
      </Link>
    </Layout>
  );
}

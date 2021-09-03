import React from "react";
import Countries from "../../assets/countries.svg";
import Vehicles from "../../assets/vehicles.svg";
import TableCard from "../../components/TableCard";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-primary flex flex-col w-full h-screen">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </header>
      <section className="flex flex-row gap-7 justify-center h-3/4 align-bottom items-end">
        <TableCard title="Countries" imgSRC={Countries} />
        <TableCard title="Vehicles" imgSRC={Vehicles} />
      </section>
      <Button
        content="SHOW"
        onclick={() => {
          return <Link to={`/countries`} />;
        }}
      />
    </div>
  );
}

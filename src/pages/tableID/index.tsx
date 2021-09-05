import React from "react";
import { useParams, Link } from "react-router-dom";
import { IRouteParams } from "../../utils/types";
import arrow from "../../assets/arrow.svg";
import Vehicles from "../../assets/vehicles.svg";
import navButtons from "../../components/NavButtons";
import Layout from "../../components/Layout";
import RowCardSection from "../../components/RowCardSection";
import Data from "../../utils/data";
import AddRow from "../../components/AddRow";

export default function TableID() {
  let { tableTitle }: IRouteParams = useParams<IRouteParams>();
  return (
    <Layout title={tableTitle}>
      <AddRow title={tableTitle} imgSRC={Vehicles} data={Data} />
      <nav className="w-full flex justify-between">
        <Link to="/" className="ml-20 self-end cursor-pointer">
          <img src={arrow} alt="Home Page" />
        </Link>
        {navButtons()}
      </nav>
      <br />
      <RowCardSection />
    </Layout>
  );
}

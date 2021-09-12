import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IRouteParams, modes } from "../../utils/types";
import arrow from "../../assets/arrow.svg";
import navButtons from "../../components/NavButtons";
import Layout from "../../components/Layout";
import RowCardSection from "../../components/RowCardSection";
import Data from "../../utils/data";
import AddRow from "../../components/AddRow";
import DeleteRow from "../../components/DeleteRow";

export default function TableID() {
  const [cardSelected, setCardSelected] = useState();
  const [pageMode, setPageMode] = useState<modes>(modes.listingMode);
  const [toDelete, setToDelete] = useState(false);
  const [toAdd, setToAdd] = useState(false);

  let { tableTitle }: IRouteParams = useParams<IRouteParams>();

  const addOrDelete = () => {
    return cardSelected === undefined ? (
      <AddRow
        title={tableTitle}
        data={Data}
        toAdd={toAdd}
        setToAdd={setToAdd}
        cardSelected={setCardSelected}
      />
    ) : (
      <DeleteRow
        toDelete={toDelete}
        setToDelete={setToDelete}
        cardID={cardSelected}
        cardSelected={setCardSelected}
      />
    );
  };

  return (
    <Layout title={tableTitle}>
      {addOrDelete()}
      <nav className="w-full flex justify-between">
        <Link to="/" className="ml-20 self-end cursor-pointer">
          <img src={arrow} alt="Home Page" />
        </Link>
        {navButtons({
          pageMode,
          setPageMode,
          cardSelected,
          setToAdd,
          setToDelete,
        })}
      </nav>
      <br />
      <RowCardSection
        cardSelected={cardSelected}
        setCardSelected={setCardSelected}
        pageMode={pageMode}
      />
    </Layout>
  );
}

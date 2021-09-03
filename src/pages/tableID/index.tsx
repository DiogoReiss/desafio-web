import React from "react";
import { useParams } from "react-router-dom";
import { IRouteParams } from "../../utils/types";

export default function TableID() {
  let { tableTitle }: IRouteParams = useParams<IRouteParams>();
  return (
    <div className="bg-primary w-full h-screen">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <title>{tableTitle}</title>
      </header>
    </div>
  );
}

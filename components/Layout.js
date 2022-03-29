import { Fragment, useState } from "react";
import { Meta } from "./";
import { useFetch } from "../hooks/useFetch";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Meta />
      {children}
    </Fragment>
  );
}

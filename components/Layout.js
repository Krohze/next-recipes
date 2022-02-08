import { Fragment } from "react";
import { Meta, Header, Footer } from "./";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Meta />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

import { useState, useEffect, Fragment } from "react";
import Layout from "./layout/layout.components";
import Preloader from "./components/preloader/preloader.component";
import Header from "./components/header/header.component";
import Sections from "./components/sections//sections-map.component";
import Footer from "./components/footer/footer.component";

export default function App() {
  const [preloader, setPreLoader] = useState(false);
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 4400);
  }, []);

  return (
    <Fragment>
      {preloader ? (
        <Preloader />
      ) : (
        <Layout>
          <Header />
          <Sections />
          <Footer />
        </Layout>
      )}
    </Fragment>
  );
}

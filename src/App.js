import { useState, useEffect, Fragment } from "react";
import Layout from "./components/Layout/Layout.component";
import Preloader from "./components/Preloader/Preloader.component";
import Header from "./components/Header/Header.component";
import Sections from "./components/Sections//Sections.component";
import Footer from "./components/Footer/Footer.component";

export default function App() {
  const [preloader, setPreLoader] = useState(false);
  const [scroll, setScroll] = useState("hero");

  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 4400);
  }, []);

  const changeSection = (arg) => {
    setScroll(arg);
  };

  return (
    <Fragment>
      {preloader ? (
        <Preloader />
      ) : (
        <Layout>
          <Header onChange={changeSection} />
          <Sections onNav={scroll} />
          <Footer />
        </Layout>
      )}
    </Fragment>
  );
}

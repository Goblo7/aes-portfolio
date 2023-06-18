import { useState, useEffect, Fragment } from "react";
import Layout from "./components/Layout/Layout.component";
import Preloader from "./components/Preloader/Preloader.component";
import Header from "./components/Header/Header.component";
import Sections from "./components/Sections//Sections.component";
import Footer from "./components/Footer/Footer.component";

const App = () => {
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
export default App;i

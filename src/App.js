import { useState, useEffect, Fragment, createContext, useRef } from "react";
import Layout from "./components/Layout/Layout.component";
import Preloader from "./components/Preloader/Preloader.component";
import Header from "./components/Header/Header.component";
import Sections from "./components/Sections//Sections.component";
import Footer from "./components/Footer/Footer.component";

//export const ScrollContext = createContext(null);

export default function App() {
  const [preloader, setPreLoader] = useState(false);

  //const ref = useRef({ hero: undefined, about: undefined });

  // const scrollIntoView = (ref) => {
  //   ref.scrollIntoView({ behavior: "smooth" });
  // };
console.log("app getting rendered")
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
          {/* <ScrollContext.Provider values={{ ref, scrollIntoView }}> */}
            <Header />
            <Sections />
          {/* </ScrollContext.Provider> */}
          <Footer />
        </Layout>
      )}
    </Fragment>
  );
}

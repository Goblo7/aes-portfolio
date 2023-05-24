import { useState, useEffect } from "react";
import SectionIdEnum from "./scripts/section-id";
import { HeroSection, AboutSection, PortofiloSection, ContactSection } from "./sections/sections";
import SectionContainer from "./components/section-container/section-container.componets";
import { layoutStyles, } from "../src/styles/layout.styles";
import { createTheme,ThemeProvider, CssBaseline, } from "@mui/material";
import Layout from "./components/main-layout/main-layout.components";
import Header from "./components/header/header.componets";
import Fooder from "./components/fooder/fooder.componets";
import SectionWidthHeight from "./scripts/section-width-height.scripts"
import Preloader from "./components/preloader/preloader.components";

const sections = [
    {
        sectionId: SectionIdEnum.hero,
        width: SectionWidthHeight[0].hero,
        height: SectionWidthHeight[1].hero,
        component: <HeroSection />
    },
    {
        sectionId: SectionIdEnum.about,
        width: SectionWidthHeight[0].about,
        height: SectionWidthHeight[1].about,
        component: <AboutSection />
    },
    {
        sectionId: SectionIdEnum.portofilo,
        width: SectionWidthHeight[0].portofilo,
        height: SectionWidthHeight[1].portofilo,
        component: <PortofiloSection />
    },
    {
        sectionId: SectionIdEnum.contacts,
        width: SectionWidthHeight[0].contacts,
        height: SectionWidthHeight[1].contacts,
        component: <ContactSection />
    },
]

const section = sections.map(({component, sectionId, width, height}) => {
    return(<SectionContainer width={width} height={height} sectionId={sectionId} key={sectionId}>
        {component}
    </SectionContainer>)
})


const LayoutTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: layoutStyles.mainColor,
            paper: layoutStyles.paperColor,
        }
    },
    typography: {
        fontFamily: layoutStyles.mainFontFamily,
        button: {
            fontFamily: layoutStyles.secandryFontFamily,
            textTransform: "none"
        }
    },
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            overSize: 1700,
        },
    },
})


export default function Main(){

    const [preloader, setPreLoader] = useState(false)
    useEffect(() => {
        setPreLoader(true);
        setTimeout(() => {
            setPreLoader(false);
        }, 4400);
    }, []);

    return(
        <ThemeProvider theme={LayoutTheme}>
            <CssBaseline/>
            {preloader ? (
                <Preloader/>
            ) : (
                <Layout>
                    <Header />
                    <main>
                        {section}
                    </main>
                    <Fooder />
                </Layout>
                )
            }
        </ThemeProvider>
    )
}
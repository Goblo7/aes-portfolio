import SectionIdEnum from "./scripts/section-id";
import { HeroSection, AboutSection, PortofiloSection, ContactSection } from "./sections/sections";
import SectionContainer from "./components/section-container/section-container.componets";
import { layoutStyles, } from "../src/styles/layout.styles";
import { createTheme,ThemeProvider, CssBaseline, } from "@mui/material";
import Layout from "./components/main-layout/main-layout.components";
import Header from "./components/header/header.componets";
import Fooder from "./components/fooder/fooder.componets";



const sections = [
    {
        sectionId: SectionIdEnum.hero,
        component: <HeroSection />
    },
    {
        sectionId: SectionIdEnum.about,
        component: <AboutSection />
    },
    {
        sectionId: SectionIdEnum.portofilo,
        component: <PortofiloSection />
    },
    {
        sectionId: SectionIdEnum.contacts,
        component: <ContactSection />
    },
]

const section = sections.map(({component, sectionId}) => {
    return(<SectionContainer sectionId={sectionId} key={sectionId}>
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
})

export default function Main(){
    
    return(
        <ThemeProvider theme={LayoutTheme}>
             <CssBaseline/>
                <Layout>
                    <Header />
                        <main>
                            {section}
                        </main>
                    <Fooder />
                </Layout>
        </ThemeProvider>
    )
}
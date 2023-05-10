import {Layout} from "./components/main-layout/main-layout.components";
import SectionIdEnum from "./scripts/section-id";
import HeroSection from "./sections/hero/hero.section"
import SectionContainer from "./components/section-container/section-container.componets";
import { createTheme,ThemeProvider, CssBaseline } from "@mui/material";
import LayoutStyles from "./styles/layout/main-layout.styles";
import AboutSection from "./sections/about/about.section";

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
        component: <HeroSection />
    },
    {
        sectionId: SectionIdEnum.contacts,
        component: <HeroSection />
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
            default: LayoutStyles.mainColor,
            paper: LayoutStyles.paperColor,
        }
    },
    typography: {
        fontFamily: LayoutStyles.mainFontFamily,
        button: {
            fontFamily: LayoutStyles.secandryFontFamily,
            textTransform: "none"
        }
    },
})

export default function Main(){
    
    return(
        <ThemeProvider theme={LayoutTheme}>
             <CssBaseline/>
            <Layout>
                {section}
            </Layout>
        </ThemeProvider>
    )
}
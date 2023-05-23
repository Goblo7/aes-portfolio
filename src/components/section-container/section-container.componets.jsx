import { Container } from "@mui/system"
import { useRef, } from "react";
import { useInView, } from "framer-motion";
import { Box } from "@mui/material";


export const SectionContainer = ({
    children: Children,
    sectionId: SectionIdEnum,
    width: SectionWidth,
    height: SectionHeight,
}) => {

    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});


    return(
        <div id={SectionIdEnum} key={SectionIdEnum} style={{minHeight: SectionHeight,}}>
            <Container  sx={{minWidth: SectionWidth}} >
                <Box ref={ref} sx={{
                      transform: isInView ? "none" : "translateY(75px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.3s"
                      }}>
                        {Children}
                </Box>
            </Container>
        </div>
    )
}

export default SectionContainer;
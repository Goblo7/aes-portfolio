import { Box, Container } from "@mui/system"

export const SectionContainer = ({
    children: Children,
    sectionId: SectionIdEnum,
}) => {
    return(
        <div id={SectionIdEnum} key={SectionIdEnum}>
            <Container>
                <Box minHeight="100dvh">{Children}</Box>
            </Container>
        </div>
    )
}

export default SectionContainer;
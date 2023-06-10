import { Container } from "@mui/system";

export const SectionContainer = ({
  children: Children,
  sectionId: SectionIdEnum,
  width: SectionWidth,
  height: SectionHeight,
}) => {
  return (
    <Container
      id={SectionIdEnum}
      key={SectionIdEnum}
      sx={{
        minWidth: SectionWidth,
        minHeight: SectionHeight,
        marginTop: "2rem",
      }}
    >
      {Children}
    </Container>
  );
};

export default SectionContainer;

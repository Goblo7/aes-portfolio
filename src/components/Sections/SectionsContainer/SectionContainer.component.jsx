import { Container } from "@mui/system";

export const SectionContainer = (props) => {
  return (
    <Container
      id={props.sectionId}
      key={props.sectionId}
      sx={{
        minWidth: props.width,
        minHeight: props.height,
        overflow: props.overFlow,
      }}
    >
      {props.children}
    </Container>
  );
};

export default SectionContainer;

import { Container } from "@mui/system";
//import { forwardRef } from "react";

export const SectionContainer = (props) => {
  return (
    <Container
      id={props.sectionId}
      key={props.sectionId}
      //ref={ref}
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

export default (SectionContainer);

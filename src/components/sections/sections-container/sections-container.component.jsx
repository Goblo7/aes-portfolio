import { Container } from "@mui/system";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const SectionContainer = ({
  children: Children,
  sectionId: SectionIdEnum,
  width: SectionWidth,
  height: SectionHeight,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container
      id={SectionIdEnum}
      key={SectionIdEnum}
      ref={ref}
      sx={{
        minWidth: SectionWidth,
        minHeight: SectionHeight,
        transform: isInView ? "none" : "translateY(75px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.3s",
      }}
    >
      {Children}
    </Container>
  );
};

export default SectionContainer;

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useRef } from "react";
import { useInView } from "framer-motion";
const SectionWrapper = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const inView = {
    transform: isInView ? "none" : "translateY(75px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.3s",
  };

  return (
      <Grid ref={ref} container sx={[props.className, inView]}>
        {props.children}
      </Grid>
  );
};

export default SectionWrapper;

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box } from "@mui/material";

const SectionWrapper = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const inView = {
    transform: isInView ? "none" : "translateY(75px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)0.3s",
    minHeight:"inherit"
  };

  return (
    <Box ref={ref} sx={inView}>
      <Grid container sx={props.className}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default SectionWrapper;

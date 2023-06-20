import { Box, SvgIcon } from "@mui/material";
import { MainLogo } from "../../scripts/icons.script";
import { preloaderStyles } from "../../scripts/styles.script";
import styles from "../../styles/preloader-styles/preloader.module.css";

const Preloader = () => {
  return (
    <Box className={styles._hidden}>
      <SvgIcon sx={preloaderStyles.gobloLogoStyles}>
        <MainLogo
          ae={styles.preloaderAE}
          border={styles.preloaderBorder}
          subBorder={styles.preloaderBorderDiffColor}
        />
      </SvgIcon>
    </Box>
  );
};

export default Preloader;

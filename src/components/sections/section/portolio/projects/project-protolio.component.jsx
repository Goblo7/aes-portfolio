import {
  List,
  SvgIcon,
  Typography,
  ListItemText,
  ImageListItem,
  Box,
  Link,
  ListItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { layoutStyles } from "../../../../../styles/layout.styles";
import { restaurant } from "../../../../../assets/img";
import { ExternalLink, GitHub } from "../../../../../assets/icons.assets";
import projectsData from "../../../../../data/projects.data";

/* styles start*/

const projectContainerStyles = {
  boxSizing: "border-box",
  boxShadow: "0 10px 30px -15px rgba(2,12,27,0.9)",
  backgroundColor: "#14233d",
  marginTop: "3rem",
  padding: "15px",
  borderRadius: "1.7rem",
  width: { lg: "auto", md: "85%", sm: "80%" },
  margin: "0 auto 5%",
};

const projectContainerDirectionsEven = {
  display: "flex",
  overflow: "hidden",
  flexDirection: { md: "row", xs: "column" },
};

const projectContainerDirectionsOdd = {
  display: "flex",
  overflow: "hidden",
  flexDirection: { md: "row-reverse", xs: "column" },
};

const projectImgContainerBackground = {
  overflow: "hidden",
  borderRadius: "1rem",
  boxShadow: "0 10px 40px -15px rgba(2,12,27,0.9)",
  maxHeight: { xs: "15rem", sm: "19rem", md: "18rem", lg: "24rem" },
  background: `radial-gradient(circle, rgba(0,99,255,1) 0%, rgba(18,8,126,1) 50%, rgba(20,6,56,1) 100%)`,
  flex: "1 0 60%",
};

const projectImgStyles = {
  height: "100%",
  width: "100%",
  transition: `transform 10s ,filter 0.8s , WebkitFilter 0.8s, opacity 1s ease-in-out 0s`,
  overflow: "hidden",
  filter: "gray",
  opacity: "0.5",
  WebkitFilter: `grayscale(1)`,
  "&:hover": {
    transform: {
      xs: `translateY(-56%)`,
      sm: `translateY(-70%)`,
      md: `translateY(-73.5%)`,
      lg: `translateY(-76.9%)`,
    },
    filter: "none",
    WebkitFilter: `grayscale(0)`,
    opacity: "1",
  },
};

const projectDescriptionContainer = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "space-evenly",
  paddingInline: "1%",
  flex: "1 0 40%",
};

const projectDescriptionHeader = {
  color: layoutStyles.mainFontColor,
  textTransform: "uppercase",
  marginBottom: { lg: "1.5%", xs: "1%" },
  marginTop:"2%",
  fontSize: `clamp(19px, 5vw, 21px)`,
};

const projectDescription = {
  color: layoutStyles.secandryFontColor,
  fontSize: `clamp(16px, 5vw, 19px)`,
};

const projectDescriptionUsedToolsContainer = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: { lg: "4%", md: "1%", xs: "2%" },
  paddingInline: "10%",
};

const projectDescriptionToolsItems = {
  color: layoutStyles.mainFontColor,
  fontFamily: layoutStyles.secandryFontFamily,
  fontSize: "15px",
};

const projectIconsContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: { lg: "6%", md: "2%", xs: "4%" },
};

const projectIconStyles = {
  color: layoutStyles.secandryFontColor,
  "&:hover": {
    color: layoutStyles.mainStyleColor,
  },
};

/* styles end*/

const projectElement = [];
for (let i = 0; i < projectsData[0].length; i += 1) {
  if (i % 2 === 0) {
    projectElement.push(
      <ListItem key={projectsData[0][i].title} item sx={projectContainerStyles}>
        <Grid item sx={projectContainerDirectionsEven}>
          <Grid item sx={projectImgContainerBackground}>
            <Link href={projectsData[0][i].liveLink} target="_blank">
              <ImageListItem sx={projectImgStyles}>
                <img src={restaurant} alt="" />
              </ImageListItem>
            </Link>
          </Grid>

          <Grid item sx={projectDescriptionContainer}>
            <Typography variant="h6" sx={projectDescriptionHeader}>
              {projectsData[0][i].title}
            </Typography>
            <Box>
              <Typography variant="p" sx={projectDescription}>
                {projectsData[0][i].description}
              </Typography>
            </Box>
            <List sx={projectDescriptionUsedToolsContainer}>
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[0][i].tools[0]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[0][i].tools[1]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[0][i].tools[2]}
              />
            </List>
            <Box sx={projectIconsContainer}>
              <Link href={projectsData[0][i].codeLink} target="_blank">
                <SvgIcon sx={projectIconStyles}>
                  <GitHub />
                </SvgIcon>
              </Link>
              <Link href={projectsData[0][i].liveLink} target="_blank">
                <SvgIcon sx={projectIconStyles}>
                  <ExternalLink />
                </SvgIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </ListItem>
    );
  } else {
    projectElement.push(
      <ListItem key={projectsData[0][i].title} item sx={projectContainerStyles}>
        <Grid item sx={projectContainerDirectionsOdd}>
          <Grid item sx={projectImgContainerBackground}>
            <Link href={projectsData[0][i].liveLink} target="_blank">
              <ImageListItem sx={projectImgStyles}>
                <img src={restaurant} alt="" />
              </ImageListItem>
            </Link>
          </Grid>

          <Grid item sx={projectDescriptionContainer}>
            <Typography variant="h6" sx={projectDescriptionHeader}>
              {projectsData[0][i].title}
            </Typography>
            <Box>
              <Typography variant="p" sx={projectDescription}>
                {projectsData[0][i].description}
              </Typography>
            </Box>
            <List sx={projectDescriptionUsedToolsContainer}>
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[0][i].tools[0]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[0][i].tools[1]}
              />
              <ListItemText
                primaryTypographyProps={projectDescriptionToolsItems}
                primary={projectsData[0][i].tools[2]}
              />
            </List>
            <Box sx={projectIconsContainer}>
              <Link href={projectsData[0][i].codeLink} target="_blank">
                <SvgIcon sx={projectIconStyles}>
                  <GitHub />
                </SvgIcon>
              </Link>
              <Link href={projectsData[0][i].liveLink} target="_blank">
                <SvgIcon sx={projectIconStyles}>
                  <ExternalLink />
                </SvgIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
}

const Project = () => {
  return <List sx={{ margin: "3rem auto" }}>{projectElement}</List>;
};

export default Project;

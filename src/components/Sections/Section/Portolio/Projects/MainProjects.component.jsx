import {
  List,
  SvgIcon,
  Typography,
  ListItemText,
  Box,
  Link,
  ListItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { mainProjectsStyles } from "../../../../../scripts/styles.script";
import { ExternalLink, GitHub } from "../../../../../scripts/icons.script";
import projectsData from "../../../../../data/projects.data";

const projectElement = [];
for (let i = 0; i < projectsData[0].length; i += 1) {
  if (i % 2 === 0) {
    projectElement.push(
      <ListItem
        key={projectsData[0][i].title}
        sx={mainProjectsStyles.projectContainerStyles}
      >
        <Grid sx={mainProjectsStyles.projectContainerDirectionsEven}>
          <Grid sx={mainProjectsStyles.projectImgContainerBackground}>
            <Link href={projectsData[0][i].liveLink} target="_blank">
              <Box
                component="img"
                sx={[
                  mainProjectsStyles.projectImgStylesConst,
                  mainProjectsStyles.projectImgStylesBlack,
                ]}
                src={projectsData[0][i].img}
                alt="project-img"
              />
            </Link>
          </Grid>

          <Grid sx={mainProjectsStyles.projectDescriptionContainer}>
            <Typography
              variant="h6"
              sx={mainProjectsStyles.projectDescriptionHeader}
            >
              {projectsData[0][i].title}
            </Typography>
            <Box>
              <Typography
                variant="p"
                sx={mainProjectsStyles.projectDescription}
              >
                {projectsData[0][i].description}
              </Typography>
            </Box>
            <List sx={mainProjectsStyles.projectDescriptionUsedToolsContainer}>
              <ListItemText
                primaryTypographyProps={
                  mainProjectsStyles.projectDescriptionToolsItems
                }
                primary={projectsData[0][i].tools[0]}
              />
              <ListItemText
                primaryTypographyProps={
                  mainProjectsStyles.projectDescriptionToolsItems
                }
                primary={projectsData[0][i].tools[1]}
              />
              <ListItemText
                primaryTypographyProps={
                  mainProjectsStyles.projectDescriptionToolsItems
                }
                primary={projectsData[0][i].tools[2]}
              />
            </List>
            <Box sx={mainProjectsStyles.projectIconsContainer}>
              <Link href={projectsData[0][i].codeLink} target="_blank">
                <SvgIcon sx={mainProjectsStyles.projectIconStyles}>
                  <GitHub />
                </SvgIcon>
              </Link>
              <Link href={projectsData[0][i].liveLink} target="_blank">
                <SvgIcon sx={mainProjectsStyles.projectIconStyles}>
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
      <ListItem
        key={projectsData[0][i].title}
        sx={mainProjectsStyles.projectContainerStyles}
      >
        <Grid sx={mainProjectsStyles.projectContainerDirectionsOdd}>
          <Grid sx={mainProjectsStyles.projectImgContainerBackground}>
            <Link href={projectsData[0][i].liveLink} target="_blank">
              <Box
                component="img"
                sx={[
                  mainProjectsStyles.projectImgStylesConst,
                  mainProjectsStyles.projectImgStylesWhite,
                ]}
                src={projectsData[0][i].img}
                alt="project-img"
              />
            </Link>
          </Grid>

          <Grid sx={mainProjectsStyles.projectDescriptionContainer}>
            <Typography
              variant="h6"
              sx={mainProjectsStyles.projectDescriptionHeader}
            >
              {projectsData[0][i].title}
            </Typography>
            <Box>
              <Typography
                variant="p"
                sx={mainProjectsStyles.projectDescription}
              >
                {projectsData[0][i].description}
              </Typography>
            </Box>
            <List sx={mainProjectsStyles.projectDescriptionUsedToolsContainer}>
              <ListItemText
                primaryTypographyProps={
                  mainProjectsStyles.projectDescriptionToolsItems
                }
                primary={projectsData[0][i].tools[0]}
              />
              <ListItemText
                primaryTypographyProps={
                  mainProjectsStyles.projectDescriptionToolsItems
                }
                primary={projectsData[0][i].tools[1]}
              />
              <ListItemText
                primaryTypographyProps={
                  mainProjectsStyles.projectDescriptionToolsItems
                }
                primary={projectsData[0][i].tools[2]}
              />
            </List>
            <Box sx={mainProjectsStyles.projectIconsContainer}>
              <Link href={projectsData[0][i].codeLink} target="_blank">
                <SvgIcon sx={mainProjectsStyles.projectIconStyles}>
                  <GitHub />
                </SvgIcon>
              </Link>
              <Link href={projectsData[0][i].liveLink} target="_blank">
                <SvgIcon sx={mainProjectsStyles.projectIconStyles}>
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

const MainProjects = () => {
  return <List sx={{ margin: "3rem auto" }}>{projectElement}</List>;
};

export default MainProjects;

import { Grid } from "@mui/material";
import { layoutStyles } from "../../styles/layout.styles";


const fooderContainer = {
    display:"grid", position:"relative", backgroundColor: layoutStyles.paperColor ,height:"10vh"
}


export default function Fooder(){
    return(
        <Grid sx={fooderContainer} >
            <Grid>
                Hello
            </Grid>
        </Grid>
    )
}
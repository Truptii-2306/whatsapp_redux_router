import { Grid, Stack } from "@mui/material";
import bgImg from "../../assets/bgImg.jpg";

function Dispaybg() {
  return (
    <Grid item sm={6} md={7.5} lg={8.4} xl={8.4}>
      <Stack
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        width="100%"
        height="100vh"
      ></Stack>
    </Grid>
  );
}

export default Dispaybg;

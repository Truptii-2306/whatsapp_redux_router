import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Mobile from "../components/deviceViews/Mobileview";
import Dekstop from "../components/deviceViews/Dekstopview";

function Display() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return <>{matches ? <Mobile /> : <Dekstop />}</>;
}

export default Display;

import { Grid } from "@mui/material";
import Sidebar from "../sideBar/sidebar";
import { Routes, Route } from "react-router-dom";
import ChatScreen from "../chatsDisplay/ChatScreen";
import Dispaybg from "../deviceViews/Displaybg";

function Dekstop() {
  return (
    <Grid container>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dispaybg />} />
        <Route path="/:Contact" element={<ChatScreen />} />
      </Routes>
    </Grid>
  );
}

export default Dekstop;

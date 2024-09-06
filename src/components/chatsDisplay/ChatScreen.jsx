import * as React from "react";
import ChatScreenFooter from "./chatScreenFooter";
import ChatScreenHeader from "./chatScreenHeader";
import ChatStack from "./chatsStack";
import { Stack, Grid } from "@mui/material";
import chatbg from "../../assets/chatBg.jpg";

function ChatScreen() {
  return (
    <Grid sx={12} sm={6} md={7.5} lg={8.4} xl={8.4}>
      <Stack
        container
        sx={{ backgroundImage: `url(${chatbg})` }}
        width="100%"
        height="100vh"
      >
        <ChatScreenHeader />
        <ChatStack />
        <ChatScreenFooter />
      </Stack>
    </Grid>
  );
}

export default ChatScreen;

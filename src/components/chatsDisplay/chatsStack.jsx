import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { onSelectContact } from "../../store/contactSlice.js";

function ChatEle({ msg, time, msgType }) {
  let dispatch = useDispatch();
  let { Contact } = useParams();

  console.log("param", Contact);
  let contactNo = Number(Contact);
  useEffect(() => {
    dispatch(onSelectContact(contactNo));
  }, [contactNo, dispatch]);

  const isSent = msgType === "sent";
  return (
    <Stack
      sx={{
        bgcolor: isSent ? "#ACFCAC" : "white",
        alignSelf: isSent ? "flex-end" : "flex-start",
        borderRadius: "5px",
        p: "5px",
        maxWidth: { xs: "80%", sm: "80%", md: "52", lg: "52%", xl: "52%" },
        wordBreak: "break-word",
      }}
    >
      <Typography fontSize={"14.2px"}>
        {msg}
        <Typography
          variant="caption"
          fontSize={"11px"}
          pb="-50px"
          color={"#667781"}
          ml="5px"
          mr="5px"
        >
          {time}
        </Typography>
      </Typography>
    </Stack>
  );
}

function ChatStack() {
  let contactdata = useSelector((state) => state.contacts.data);
  let { Contact } = useParams();
  let chats = [];
  let MsgArr;

  for (let x in contactdata) {
    if (contactdata[x].Contact === Number(Contact)) {
      MsgArr = contactdata[x].MsgArr;
    }
  }
  const chatStackRef = useRef(null);
  useEffect(() => {
    if (chatStackRef.current) {
      chatStackRef.current.scrollTop = chatStackRef.current.scrollHeight;
    }
  });

  if (Contact) {
    for (let x in MsgArr) {
      let msg = MsgArr[x].msg;
      let time = MsgArr[x].time;
      let msgType = MsgArr[x].msgType;
      chats.push(<ChatEle key={x} msg={msg} time={time} msgType={msgType} />);
    }
  }
  return (
    <Stack
      ref={chatStackRef}
      spacing={0.2}
      height={"76vh"}
      pt="2%"
      pl="7%"
      pr="7%"
      pb="2%"
      overflow={"auto"}
      sx={{ scrollbarWidth: "thin" }}
    >
      {chats}
    </Stack>
  );
}

export default ChatStack;

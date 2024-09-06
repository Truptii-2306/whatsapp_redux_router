import Avatar from "@mui/material/Avatar";
import {
  ListItemAvatar,
  Grid,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ChatLi({ contact }) {
  let length = contact["MsgArr"].length - 1;
  let msg = contact.MsgArr[length].msg.trimStart();
  let msgLen = msg.length;
  let time = contact.MsgArr[length].time;
  let Navigate = useNavigate();
  let selectedContact = useSelector((state) => state.contacts.selectedContact);
  return (
    <>
      <ListItem
        sx={{
          width: "100%",
          height: 70,
          pl: 0,
          pr: "15px",
          pt: 0,
          pb: 0,
          bgcolor:
            selectedContact && contact["Contact"] === selectedContact
              ? "#f0f2f5"
              : "",
        }}
        onClick={() => {
          Navigate(`/${contact.Contact}`);
        }}
      >
        <ListItemAvatar>
          <Avatar
            sx={{ width: 49, height: 49, mr: "13px", ml: "15px" }}
            src={contact["profile"]}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Grid container justifyContent="space-between">
            <Typography fontSize={"17px"} align={"left"} sx={{ mb: -3 }}>
              {contact["Name"]}
            </Typography>
            <Typography
              variant="caption"
              color={"#667781"}
              align="right"
              fontSize={"12px"}
            >
              {" "}
              {time}
            </Typography>
          </Grid>
          <Typography variant="caption" color={"#667781"} fontSize={"14px"}>
            {" "}
            {msgLen < 25 ? msg : msg.slice(0, 25) + "..."}
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

function Chatlist() {
  let chats = [];
  let temp = chats;
  let contactdata = useSelector((state) => state.contacts.data);
  let searchValue = useSelector((state) => state.contacts.searchValue);

  for (let x in contactdata) {
    chats.push(<ChatLi key={x} contact={contactdata[x]} />);
  }

  if (searchValue) {
    const searchResult = temp.filter((contact) =>
      contact.props.contact.Name.toLowerCase().includes(
        searchValue.toLowerCase().substring(0, 2)
      )
    );
    temp = searchResult;
  }

  return (
    <>
      {temp.length > 0 ? (
        <List
          sx={{
            maxHeight: "80vh",
            overflow: "auto",
            scrollbarWidth: "thin",
            mb: 0,
          }}
        >
          {temp}
        </List>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "15%",
            fontSize: "14px",
            color: "#8696a0",
          }}
        >
          No chats, contacts or messages found
        </Typography>
      )}
    </>
  );
}

export default Chatlist;

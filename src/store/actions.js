import { onMsg } from "./contactSlice";

function sendMsg(msg) {
  return (dispatch, getState) => {
    const selectedContact = getState().contacts.selectedContact;
    const contactData = getState().contacts.data;
    let msgArr;
    let index;
    for (let x in contactData) {
      if (contactData[x].Contact === selectedContact) {
        index = x;
        msgArr = [...contactData[x].MsgArr];
        msgArr.push(msg);
      }
    }
    dispatch(onMsg({ index: index, msgArr: msgArr }));
  };
}

export default sendMsg;

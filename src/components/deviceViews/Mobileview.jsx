import Sidebar from "../sideBar/sidebar";
import { Routes, Route } from "react-router-dom";
import ChatScreen from "../chatsDisplay/ChatScreen";

function Mobile() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/:Contact" element={<ChatScreen />} />
    </Routes>
  );
}

export default Mobile;

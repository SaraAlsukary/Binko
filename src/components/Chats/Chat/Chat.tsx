// // import React, { useContext } from "react";
// import Cam from "src/img/cam.png";
// import Add from "src/img/add.png";
// import More from "src/img/more.png";
// import Messages from "@components/Chats/Messages/Messages";
// import Input from "@components/Chats/Input/Input";
// // import { ChatContext } from "../context/ChatContext";
// import { useAppSelector } from "@hooks/app";
// import style from './Chat.module.css';
// import { SetStateAction } from "react";
// const { chat, chatInfo, chatIcons } = style;
// const Chat = ({ setShow, show }: { setShow: SetStateAction<any>, show: boolean }) => {
//   // const { data } = useContext(ChatContext);
//   const { user } = useAppSelector(state => state.auth);

//   return (
//     <div className={chat}>
//       {/* <div className={chatInfo}>
//         <span>{user?.name}</span>
//         <div className={chatIcons}>
//           <img src={Cam} alt="" />
//           <img src={Add} alt="" />
//           <img src={More} alt="" onClick={() => setShow(!show)} />
//         </div>
//       </div>
//       <Messages />
//       <Input /> */}
//     </div>
//   );
// };

// export default Chat;

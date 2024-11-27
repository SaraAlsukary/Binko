import Sidebar from '@components/Chats/SideBar/Sidebar';
// import Chat from '@components/Chats/Chat/Chat';
import style from './Chats.module.css'
import Input from "@components/Chats/Input/Input";
import { Outlet } from "react-router-dom";

// import React, { useContext } from "react";
import Cam from "src/img/cam.png";
import Add from "src/img/add.png";
import More from "src/img/more.png";
// import Messages from "@components/Chats/Messages/Messages";
// import { ChatContext } from "../context/ChatContext";
import { useAppSelector } from "@hooks/app";
import { Container } from 'react-bootstrap';
import { useState } from 'react';
// import ChatsHomepage from './ChatsHomepage';
const { container, home, chat, chatInfo, chatIcons } = style;

const Chats = () => {
  const { user } = useAppSelector(state => state.auth);
  const [show, setShow] = useState(false);
  return (
    <div className={home}>
      <Container>
        <div className={container}>
          <Sidebar show={show} />
          {/* <ChatsHomepage show={show} setShow={setShow} /> */}
          <div className={chat}>
            <div className={chatInfo}>
              <span>{user?.name}</span>
              <div className={chatIcons}>
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" onClick={() => setShow(!show)} />
              </div>
            </div>
            {/* <Messages /> */}
            <Outlet />

            <Input />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Chats
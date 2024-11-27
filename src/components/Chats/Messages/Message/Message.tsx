import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
import style from './Message.module.css';
// import { useAppSelector } from "@hooks/app";
const { messages, messageInfo, messageContent } = style;
const Message = ({ message }: {
  message: {
    img: string,
    text: string
  }
}) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  const ref: any = useRef();
  // const { user } = useAppSelector(state => state.auth);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${messages}`}
    //  ${content.senderId === currentUser.uid && "owner"}

    >
      <div className={messageInfo}>
        <img
          // src={
          //   message.senderId === currentUser.uid
          //     ? user.photoURL
          //     : data.user.photoURL
          // }
          src={message?.img}
          alt=""
        />
      </div>
      <div className={messageContent}>
        {message.img && <img src={message.img} alt="" />}
        <p>{message.text}</p>
        <span>just now</span>
      </div>
    </div>
  );
};

export default Message;

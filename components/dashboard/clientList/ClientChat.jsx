import React, { useState } from "react";
import check_icon from "../../../public/assets/chart_check_icon.svg";
import send_message from "../../../public/assets/send_message.png";
import chart_connect from "../../../public/assets/chart_connect.png";
import Image from "next/image";
import TextHeader from "../TextHeader";

function ClientChat({ setMessages, messages }) {
  const [inputText, setInputText] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {
          text: inputText,
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setInputText("");
    }
  }

  return (
    <div className="ClientChatContainer">
      <TextHeader
        title="Quick Chat"
        text="Lorem ipsum dolor sit amet "
        className="smTextHeader mb-2"
      />

      <div className="card border rounded-3 p-2 chatContainer">
        <div className="messages">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div className={`messageWrapper ${message.sender}`} key={index}>
                {index === 1 && (
                  <div className="messagesDate w-100 px-3">
                    <div className="orlineContainer my-3">
                      <div className="orline"></div>
                      <p className="mainText">Yesterday</p>
                      <div className="orline"></div>
                    </div>
                  </div>
                )}
                <div className={`message`}>
                  <p className="messagetext">{message.text}</p>
                  <div className="messagetimeText">
                    <span> {message.time}</span>
                    <Image src={check_icon} alt="seen" className="checkImage" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="noChartImageWrapper">
              <Image
                src={chart_connect}
                alt="chart connect"
                className="chartConnectImage"
              />
            </div>
          )}
        </div>

        <form className="messagesInputFiled" onSubmit={sendMessage}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message ..."
            className="messageArea"
          />
          <button className="sendBtn" type="submit">
            <Image src={send_message} alt="send" className="sendMessageIcon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientChat;

import React from "react";
import "./MessageItems.css";

const MessageItems = ({item, deleteMessage}) => {

    return(
        <div className="messages" key={item.key}>
            <span className="close" onClick={() => {deleteMessage(item.id)}}>
                x
            </span>
            <h5>{item.text}</h5>        
        </div>
    );
};

export default MessageItems;

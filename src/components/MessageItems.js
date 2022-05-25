import React from "react";
import "./MessageItems.css";

const MessageItems = ({item, deleteMessage}) => {
    
    return(
        <div className="messages" key={item.key}>
                <h5>{item.text}</h5>
                <span className="close" onClick={() => {deleteMessage(item.id)}}>
                    X
                </span>
        </div>
    );
};

export default MessageItems;

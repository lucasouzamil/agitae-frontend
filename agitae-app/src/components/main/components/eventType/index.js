import React from "react";
import './eventType.css'

export default function EventType(props) {
    return (
        <div className="container">
            <p className="name">{props.name}</p>
        </div>
    );
}
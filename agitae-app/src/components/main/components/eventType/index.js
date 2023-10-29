import React from "react";
import './eventType.css'

export default function EventType(props) {
    return (
        <div className="container" onClick={() => props.setType(props.db_id)}>
            <p className="name">{props.name}</p>
        </div>
    );
}

import React from "react";
import './publisher.css'
import ClearIcon from '@mui/icons-material/Clear';
import Form from "./form";


export default function Publisher(props) {


    return (
        <section in-screen={props.inscreen} className="section-publisher">
            <div className='header-publisher'>
                <div></div>
                <button className="btn-x-publisher" onClick={props.setvisible}>
                    <ClearIcon className="icon-x" style={{ fontSize: 35 }}></ClearIcon>
                </button>
            </div>
            <div className="main-publisher">
                <Form reloadEvents={props.reloadEvents}></Form>
            </div>
        </section>
    )
}

import React from "react";
import './scrollrow.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ScrollRow(props) {
    return (
        <div className="scrollRow">
            <div className="scrollRow-left">
                <KeyboardArrowLeftIcon style={{ fontSize: 50 }}></KeyboardArrowLeftIcon>
            </div>
            <div className="scrollRow--listarea">
                <div className="scrollRow--list">
                    <div className="item--list">
                        <div className="item"><div className="teste"></div></div>
                        <div className="item"><div className="teste"></div></div>
                        <div className="item"><div className="teste"></div></div>
                        <div className="item"><div className="teste"></div></div>
                        <div className="item"><div className="teste"></div></div>
                        <div className="item"><div className="teste"></div></div>
                    </div>
                </div>
            </div>
            <div className="scrollRow-left">
                <KeyboardArrowRightIcon style={{ fontSize: 50 }}></KeyboardArrowRightIcon>
            </div>
        </div>
    );
}
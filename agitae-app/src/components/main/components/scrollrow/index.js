import React, {useState} from "react";
import './scrollrow.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ScrollRow(props) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        
    };

    const handleRightArrow = () => {
       
    };

    return (
        <div className="scrollRow">
            <div className="scrollRow-left" onClick={handleLeftArrow}>
                <KeyboardArrowLeftIcon className="iconeScrollLeft" style={{ fontSize: 50 }}></KeyboardArrowLeftIcon>
            </div>
            <div className="scrollRow--listarea">
                <div className="scrollRow--list" style={{marginLeft:scrollX}}>
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
            <div className="scrollRow-left" onClick={handleRightArrow}>
                <KeyboardArrowRightIcon className="iconeScrollRight" style={{ fontSize: 50 }}></KeyboardArrowRightIcon>
            </div>
        </div>
    );
}
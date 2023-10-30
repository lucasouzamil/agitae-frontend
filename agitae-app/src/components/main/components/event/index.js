import React from "react";
import './event.css'
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Event(props) {

    console.log(props.eventdata.url);

    let img = null;

    if (props.eventdata.image){
        img = `http://127.0.0.1:8000${props.eventdata.image}`;
    } else {
        img = 'assets/img/placeholder_image.png';
    }
    
    return (
        <div className='main'>
            <div className='blockImg'>
                <img className='eventImage' src={img} alt='teste' />
            </div>
            <div className="infos">
                <p className='eventTitle'>{props.eventdata.name}</p>
                <div className='eventInfo'>
                    <CalendarMonthIcon className="iconData" style={{ fontSize: '20px' }}></CalendarMonthIcon>
                    <p className='eventInfoData'>{props.eventdata.date}</p>
                </div>
                <div className='eventInfo'>
                    <RoomIcon className="iconData" style={{ fontSize: '20px' }}></RoomIcon>
                    <p className='eventInfoData'>{props.eventdata.local_name}</p>
                </div>
            </div>
        </div>
    );
}
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

    const date = props.eventdata.date.split('-');
    console.log('$$$$$$$');
    console.log(date[0])
    
    return (
        <div className='main' onClick={props.viewEventPage}>
            <div className='blockImg'>
                <img className='eventImage' src={img} alt='teste' />
            </div>
            <div className="infos">
                <p className='eventTitle'>{props.eventdata.name}</p>
                <div className='eventInfo'>
                    <CalendarMonthIcon className="iconData" style={{ fontSize: '20px' }}></CalendarMonthIcon>
                    <p className='eventInfoData'>{`${date[2]}/${date[1]}/${date[0]}`}</p>
                </div>
                <div className='eventInfo'>
                    <RoomIcon className="iconData" style={{ fontSize: '20px' }}></RoomIcon>
                    <p className='eventInfoData'>{props.eventdata.local_name}</p>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import './event.css'
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Event(props) {


    return (
        <div className='main'>
            <div className='blockImg'>
                <img className='eventImage' src="https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2023/09/image.png" alt='teste' />
            </div>
            <div className="infos">
                <p className='eventTitle'>Workshop de Focaccia</p>
                <div className='eventInfo'>
                    <CalendarMonthIcon className="iconData" style={{ fontSize: '20px' }}></CalendarMonthIcon>
                    <p className='eventInfoData'>xx/xx/xxxx</p>
                </div>
                <div className='eventInfo'>
                    <RoomIcon className="iconData" style={{ fontSize: '20px' }}></RoomIcon>
                    <p className='eventInfoData'>Komplexo Tempo</p>
                </div>
            </div>
        </div>
    );
}
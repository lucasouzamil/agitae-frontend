import React, { useEffect, useState } from "react";
import './eventPage.css'
import ClearIcon from '@mui/icons-material/Clear';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import waetherAPI from "../../../../apis";


export default function EventPage(props) {

    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const filteredEvent = props.events.find(item => item.id === props.visibleEventId);
        setSelectedEvent(filteredEvent);
        console.log(filteredEvent);
    }, [props.visibleEventId, props.events]);


    if (!selectedEvent) {
        return <div></div>;
    }
    const date = selectedEvent.date.split('-');
    let img = null;
    if (selectedEvent.image) {
        img = `http://127.0.0.1:8000${selectedEvent.image}`;
    } else {
        img = 'assets/img/placeholder_image.png';
    }

    const address = `${selectedEvent.street} ${selectedEvent.number}, ${selectedEvent.neighborhood}, ${selectedEvent.city}, ${selectedEvent.state}, Brazil`;

    console.log(address);
    waetherAPI.getWeatherInfoByAddress(address)
        .then(weatherData => {
            console.log(weatherData);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });

    return (
        <section in-screen={props.inscreen} className="section-eventPage">
            <div className='header-eventPage'>
                <div></div>
                <button className="btn-x-eventPage" onClick={props.setvisible}>
                    <ClearIcon className="icon-x" style={{ fontSize: 35 }}></ClearIcon>
                </button>
            </div>
            <div className="main-eventPage">
                <div className="header-eventPage">
                    <div className="blockImageInput">
                        <img
                            className="ImageInput"
                            src={img}
                            alt="Imagem selecionada"
                        />
                    </div>
                    <div className="infos-eventpage">
                        <p className='eventTitle-eventpage'>{selectedEvent.name}</p>
                        <div className='eventInfo-eventpage'>
                            <CalendarMonthIcon className="iconData-eventpage" style={{ fontSize: '20px' }}></CalendarMonthIcon>
                            <p className='eventInfoData-eventpage'>{`${date[2]}/${date[1]}/${date[0]}`}</p>
                        </div>
                        <div className='eventInfo-eventpage'>
                            <RoomIcon className="iconData-eventpage" style={{ fontSize: '20px' }}></RoomIcon>
                            <p className='eventInfoData-eventpage'>{selectedEvent.local_name}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="description-title">Descrição</p>
                    <p className="info-text">{selectedEvent.description}</p>
                </div>
                <div>
                    <p className="description-title">Informações climáticas</p>
                    <p className="info-text">{address}</p>
                    <p className="info-text">'CLIMAASS'</p>
                </div>
            </div>
        </section>
    )
}

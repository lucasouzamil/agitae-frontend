import React, { useEffect, useState } from "react";
import './eventPage.css'
import ClearIcon from '@mui/icons-material/Clear';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import waetherAPI from "../../../../apis";


export default function EventPage(props) {

    const [selectedEvent, setSelectedEvent] = useState(props.visibleEvent);
    const [weatherInfos, setWeatherInfos] = useState(null);


    useEffect(() => {
        setWeatherInfos(null);
        if (props.visibleEvent) {
            setSelectedEvent(props.visibleEvent);

            const address = `${props.visibleEvent.street} ${props.visibleEvent.number}, ${props.visibleEvent.neighborhood}, ${props.visibleEvent.city}, ${props.visibleEvent.state}, Brazil`;

            console.log(address);
            waetherAPI.getWeatherInfoByAddress(address)
                .then(weatherData => {
                    setWeatherInfos(weatherData);
                    console.log(weatherData);
                })
                .catch(error => {
                    console.error('Ocorreu um erro:', error);
                });
        }

    }, [props.visibleEvent]);

    const handleWeatherInfo = () => {
        const mainCondition = weatherInfos.weather[0].description;
        const currentTemperature = weatherInfos.main.temp;
        const feelsLikeTemperature = weatherInfos.main.feels_like;

        return <>
            <p className="info-text">Descrição: {`${mainCondition}`}</p>
            <p className="info-text">Temperatura: {`${currentTemperature}°C`}</p>
            <p className="info-text">Sensação térmica: {`${feelsLikeTemperature}°C`}</p>
        </>
    };


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

    return (
        <section in-screen={props.inscreen} className="section-eventPage">
            <div className='XXXXXXXXXXX'>
                <div className="divvazia"></div>
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
                    <p className="description-title">Informações climáticas atuais</p>
                    <p className="info-text">{`${props.visibleEvent.street} ${props.visibleEvent.number}, ${props.visibleEvent.neighborhood}, ${props.visibleEvent.city}, ${props.visibleEvent.state}, Brazil`}</p>
                    <p className="info-text">{weatherInfos ? handleWeatherInfo() : 'Buscando informações climáticas'}</p>
                </div>
            </div>
        </section>
    )
}

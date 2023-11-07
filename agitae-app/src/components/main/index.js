import React, { useState, useEffect } from "react";
import './main.css'
import ExploreIcon from '@mui/icons-material/Explore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import ScrollRow from './components/scrollrow'
import EventType from './components/eventType'
import EventSubType from './components/eventSubType'
import Event from './components/event'
import EventPage from "./components/eventPage";

export default function Main(props) {

    const [selectedType, setSelectedType] = useState(props.eventTypes[0].id);
    const [selectedSubType, setSelectedSubType] = useState(props.eventSubTypes[0].id);

    const [filteredSubTypes, setFilteredSubTypes] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);


    useEffect(() => {
        if (props.eventTypes.length > 0) {
            setSelectedType(props.eventTypes[0].id);
        }
        if (props.eventSubTypes.length > 0) {
            setSelectedSubType(props.eventSubTypes[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeType = (typeId) => {
        setSelectedType(typeId);
        const type = props.eventTypes.find((type) => type.id === typeId);
        const filteredSubTypes = props.eventSubTypes.filter((item) => type.subtypes.includes(item.id));
        setSelectedSubType(filteredSubTypes[0].id);
    };

    useEffect(() => {
        const type = props.eventTypes.find((type) => type.id === selectedType);
        console.log('###');
        console.log(props.eventTypes);
        console.log(selectedType);
        console.log(props.eventSubTypes);
        const filtered = props.eventSubTypes.filter((item) => type.subtypes.includes(item.id));
        setFilteredSubTypes(filtered);
    }, [props.eventTypes, props.eventSubTypes, selectedType, setFilteredSubTypes]);

    useEffect(() => {
        const subType = props.eventSubTypes.find(item => item.id === selectedSubType);
        const filteredEventsId = subType.events;
        setFilteredEvents(props.events.filter(item => filteredEventsId.includes(item.id)));
        console.log('FOOOOI')
    }, [props.eventSubTypes, selectedSubType, props.events]);

    return (
        <main color-theme={props.theme}>
            <section className="section-main">
                <div className="section-main-header">
                    <ExploreIcon className="section-main-header-icon" style={{ fontSize: 40 }}></ExploreIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Explorar</p>
                </div>
                {props.eventTypes.length > 0 ? (
                    <ScrollRow elements={
                        props.eventTypes.map((item) => (
                            <EventType name={item.name} db_id={item.id} setType={changeType} ></EventType>
                        ))
                    } scrollId='0'></ScrollRow>
                ) : null}
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <FilterAltIcon className="section-main-header-icon" style={{ fontSize: 40 }}></FilterAltIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Tipos</p>
                </div>
                {filteredSubTypes.length > 0 ? (
                    <ScrollRow
                        elements={filteredSubTypes.map((item) => (
                            <EventSubType db_id={item.id} name={item.name} setSubType={setSelectedSubType} />
                        ))}
                        scrollId='1'
                        change={selectedType}
                    />
                ) : null}
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <LocationSearchingIcon className="section-main-header-icon" style={{ fontSize: 40 }}></LocationSearchingIcon>
                    <p className="section-title">Eventos</p>
                </div>
                <div className="events">
                    {filteredEvents.map((item) => (
                        <Event key={`note__${item.id}`} eventdata={item}></Event>
                    ))}
                </div>
                <EventPage></EventPage>
            </section>
        </main>
    );
}
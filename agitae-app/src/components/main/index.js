import React from "react";
import './main.css'
import ExploreIcon from '@mui/icons-material/Explore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ScrollRow from './components/scrollrow'
import EventType from './components/eventType'
import EventSubType from './components/eventSubType'

export default function Main(props) {
    const eventTypes = ['Todos','Música','Culinária','Cutlura'];

    const elements1 = eventTypes.map((nome) => (
      <EventType name={nome}></EventType>
    ));

    const eventSubTypes = ['Todos','Baladas','Brasilidades','Eletrônicas','Festivais', 'Sertanejos','Universitárias'];

    const elements2 = eventSubTypes.map((nome) => (
        <EventSubType name={nome}></EventSubType>
      ));

    return (
        <main color-theme={props.theme}>
            <section className="section-main">
                <div className="section-main-header">
                    <ExploreIcon className="section-main-header-icon" style={{ fontSize: 50 }}></ExploreIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Explorar</p>
                </div>
                <ScrollRow elements={elements1} scrollId='0'></ScrollRow>
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <FilterAltIcon className="section-main-header-icon" style={{ fontSize: 50 }}></FilterAltIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Filtrar</p>
                </div>
                <ScrollRow elements={elements2} scrollId='1'></ScrollRow>
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <p className="section-title">Eventos</p>
                </div>
            </section>
        </main>
    );
}
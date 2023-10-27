import React from "react";
import './main.css'
import ExploreIcon from '@mui/icons-material/Explore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ScrollRow from './components/scrollrow'
import EventType from './components/eventType'

export default function Main(props) {
    const names1 = ['Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve','Alice', 'Bob', 'Charlie', 'David', 'Eve',];

    const elements1 = names1.map((nome, index) => (
      <EventType name={nome}></EventType>
    ));

    const names2 = [
        "Ana",
        "João",
        "Maria",
        "Pedro",
        "Sofia",
        "Lucas",
        "Camila",
        "André",
        "Juliana",
        "Daniel",
        "Laura",
        "Felipe",
        "Letícia",
        "Marcelo",
        "Bruna",
        "Thiago",
        "Isabella",
        "Rafael",
        "Luana",
        "Matheus"
    ];

    const elements2 = names2.map((nome, index) => (
        <EventType name={nome}></EventType>
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
                <ScrollRow elements={elements2} scrollId='1'></ScrollRow>*/
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <p className="section-title">Eventos</p>
                </div>
            </section>
        </main>
    );
}
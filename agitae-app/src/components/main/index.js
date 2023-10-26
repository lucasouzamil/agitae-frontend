import React from "react";
import './main.css'
import ExploreIcon from '@mui/icons-material/Explore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Mains(props) {

    return (
        <main color-theme={props.theme}>
            <section className="section-main">
                <div className="section-main-header">
                    <ExploreIcon className="section-main-header-icon" style={{ fontSize: 50 }}></ExploreIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Explorar</p>
                </div>
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <FilterAltIcon className="section-main-header-icon" style={{ fontSize: 50 }}></FilterAltIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Filtrar</p>
                </div>
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <p className="section-title">Eventos</p>
                </div>
            </section>
        </main>
    );
}
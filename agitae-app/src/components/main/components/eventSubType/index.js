import React from "react";
import './eventSubType.css'

export default function EventSubType(props) {

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function makeSimple(word) {
        word = word.toLowerCase();
        word = removeAccents(word);
        return word;
    }


    return (
        <div className="main-eventsubtype">
            <div className="blockIcon-eventsubtype">
                <img className="icon-eventsubtype" src={`/assets/iconeseventos/musica/${makeSimple(props.name)}-white.png`} alt='teste' />
            </div>
            <p className="textType-eventsubtype">{props.name}</p>
        </div>
    );
}
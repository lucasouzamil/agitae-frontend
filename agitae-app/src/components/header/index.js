import React, { useState } from "react";
import './header.css'
import Publisher from "./components/publisher";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header(props) {
    const [publisherVisible, setPublisherVisible] = useState(('false'));

    const changePublishVisibile = () => {
        if (publisherVisible === 'true') {
            setPublisherVisible('false')
        } else {
            setPublisherVisible('true')
        }
    };

    let prevScrollPos = window.scrollY;

    window.onscroll = function () {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            document.querySelector('header').style.top = '0';
        } else {
            document.querySelector('header').style.top = '-108px'; // Altura do cabeçalho
        }

        prevScrollPos = currentScrollPos;
    }

    return (
        <header color-theme={props.theme}>
            <Publisher inscreen={publisherVisible} setvisible={changePublishVisibile}></Publisher>
            <div>
                <button className='btn-header' onClick={changePublishVisibile}>
                    <AddCircleIcon className='icon-header' style={{ fontSize: 45 }}></AddCircleIcon>
                </button>
            </div>
            {/*<h1 className="titulo">LOGO</h1>*/}
            <div className="blockImageLogo">
                <img className="ImageLogo" src='assets/img/logo8.png' alt="Logo agitae" />
            </div>
            <div>
                <button className='btn-header' onClick={props.changeTheme}>
                    <DarkModeIcon className='icon-header' style={{ fontSize: 45 }}></DarkModeIcon>
                </button>
            </div>
        </header>
    );
}
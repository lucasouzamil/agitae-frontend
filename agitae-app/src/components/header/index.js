import React, { useState } from "react";
import './header.css'
import Publisher from "./components/publisher";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header(props) {
    const [theme, setTheme] = useState('dark');
    const [publisherVisible, setPublisherVisible] = useState(('false'));

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const changePublishVisibile = () => {
        if (publisherVisible === 'true') {
            setPublisherVisible('false')
        } else {
            setPublisherVisible('true')
        }
    };

    return (
        <header color-theme={theme}>
            <Publisher inscreen={publisherVisible} setvisible={changePublishVisibile}></Publisher>
            <div>
                <button className='btn-header' onClick={changePublishVisibile}>
                    <AddCircleIcon className='icon-header' style={{ fontSize: 50 }}></AddCircleIcon>
                </button>
            </div>
            <h1 className='titulo'> aaaaaaaaaaaa </h1>
            <div>
                <button className='btn-header' onClick={changeTheme}>
                    <DarkModeIcon className='icon-header' style={{ fontSize: 50 }}></DarkModeIcon>
                </button>
            </div>
        </header>
    );
}
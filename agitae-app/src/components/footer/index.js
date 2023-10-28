import React from "react";
import './footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(props) {
    return (
        <footer color-theme={props.theme}>
            <div className="footerContent">
                <div className="footer-texts">
                    <a className="footer-text" href="https://github.com/lucasouzamil/agitae-frontend">
                        <GitHubIcon className='git-icon'style={{fontSize:'60px'}}></GitHubIcon>
                    </a>
                    <p className="footer-text">Este projeto foi realizado por Lucas Lima</p>
                    <p className="footer-text">2023/2</p>
                </div>
            </div>
        </footer>
    );
}
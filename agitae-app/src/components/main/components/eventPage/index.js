import React from "react";
import './eventPage.css'
import ClearIcon from '@mui/icons-material/Clear';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



export default function Publisher(props) {


    return (
        <section in-screen={'true'} className="section-eventPage">
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
                            src='https://s2-oglobo.glbimg.com/NM-LbgcP2XdLxx0NYB1ZBMqyF2k=/0x0:1000x745/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/u/t/N9FFtxQrSd5xgXvSmWQA/corinthians-santos.jpg'
                            alt="Imagem selecionada"
                        />
                    </div>
                    <div className="infos-eventpage">
                        <p className='eventTitle-eventpage'>Nome do evento</p>
                        <div className='eventInfo-eventpage'>
                            <CalendarMonthIcon className="iconData-eventpage" style={{ fontSize: '20px' }}></CalendarMonthIcon>
                            <p className='eventInfoData-eventpage'>01/01/2024</p>
                        </div>
                        <div className='eventInfo-eventpage'>
                            <RoomIcon className="iconData-eventpage" style={{ fontSize: '20px' }}></RoomIcon>
                            <p className='eventInfoData-eventpage'>Local do evento</p>
                        </div>
                    </div>
                </div>
                    <div>
                        <p className="description-title">Descrição</p>
                        <p className="info-text">Lorem lorem lorem lorem lorem lorem lorem</p>
                    </div>
                    <div>
                        <p className="description-title">Informações climáticas</p>
                        <p className="info-text">Lorem lorem lorem lorem lorem lorem lorem</p>
                    </div>
            </div>
        </section>
    )
}

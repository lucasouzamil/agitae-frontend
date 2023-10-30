import React, { useState } from "react";
import './publisher.css'
import ClearIcon from '@mui/icons-material/Clear';

const API_POST_EVENT = 'http://127.0.0.1:8000/events/api/';

function isValidURL(url) {
    const urlPattern = /^(https?:\/\/)?([\da-zA-Z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlPattern.test(url);
}

function checkDate(date) {
    const currentDate = new Date();
    const checkDate = new Date(date);
    if (isNaN(currentDate) || isNaN(checkDate)) {
        return false;
    }
    currentDate.setHours(0, 0, 0, 0);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < currentDate;
}

function formCheck(formData) {
    if (formData.get('name').length === 0) {
        return 'Insira um nome.'
    }
    if (formData.get('description').length === 0) {
        return 'Insira uma descrição.'
    }
    if (!isValidURL(formData.get('url'))) {
        return 'Insira uma URL válida.'
    }
    console.log(formData.get('date'))
    if (formData.get('date').length === 0 || checkDate(formData.get('date'))) {
        return 'Insira uma data válida.';
    }
    if (formData.get('time').length === 0) {
        return 'Insira uma hora.'
    }
    if (formData.get('local_name').length === 0) {
        return 'Insira o nome do local.'
    }
    if (formData.get('state').length === 0) {
        return 'Insira o estado UF do evento.'
    }
    if (formData.get('city').length === 0) {
        return 'Insira a cidade do evento.'
    }
    if (formData.get('neighborhood').length === 0) {
        return 'Insira o bairro do evento.'
    }
    if (formData.get('street').length === 0) {
        return 'Insira a rua do evento.'
    }
    if (formData.get('number').length === 0) {
        return 'Insira o número.'
    }
    return ''
}


export default function Publisher(props) {
    const [warning, setWarning] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const imageFile = e.target.image.files[0];
        if (imageFile !== undefined){
            formData.append('image', imageFile);
        } else {
            console.log('AAEEE');
            formData.image = null;
        }

        if (formCheck(formData).length > 0){
            setWarning(formCheck(formData));
        } else {
            setWarning('');
            fetch(API_POST_EVENT, {
                method: 'POST',
                body: formData,})
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na solicitação');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Evento publicado com sucesso!', data);
                })
                .catch(error => {
                    console.error('Erro ao publicar o evento', error);
            });
        }
    };

    return (
        <section in-screen={props.inscreen} className="section-publisher">
            <div className='header-publisher'>
                <div></div>
                <button className="btn-x-publisher" onClick={props.setvisible}>
                    <ClearIcon className="icon-x" style={{ fontSize: 35 }}></ClearIcon>
                </button>
            </div>
            <div className="main-publisher">
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <input type="file" id="image-input" accept="image/*" name="image" />
                    <input
                        type="text"
                        maxLength="50"
                        id="name-input"
                        placeholder="Nome do evento"
                        name="name"
                    />
                    <input
                        type="text"
                        maxLength="1000"
                        id="description-input"
                        placeholder="Descrição do evento"
                        name="description"
                    />
                    <input
                        type="url"
                        id="url-input"
                        placeholder="Link do evento"
                        name="url"
                    />
                    <input
                        type="date"
                        id="date-input"
                        placeholder="Data do evento"
                        name="date"
                    />
                    <input
                        type="time"
                        id="time-input"
                        placeholder="Hora do evento"
                        name="time"
                    />
                    <input
                        type="text"
                        maxLength="50"
                        id="local-name-input"
                        placeholder="Nome do local do evento"
                        name="local_name"
                    />
                    <input
                        type="text"
                        maxLength="50"
                        id="state-input"
                        placeholder="Estado"
                        name="state"
                    />
                    <input
                        type="text"
                        maxLength="50"
                        id="city-input"
                        placeholder="Cidade"
                        name="city"
                    />
                    <input
                        type="text"
                        maxLength="50"
                        id="neighborhood-input"
                        placeholder="Bairro"
                        name="neighborhood"
                    />
                    <input
                        type="text"
                        maxLength="50"
                        id="street-input"
                        placeholder="Rua"
                        name="street"
                    />
                    <input
                        type="number"
                        id="number-input"
                        placeholder="Número"
                        name="number"
                    />
                    <button className="btn" type="submit">
                        Publicar Evento
                    </button>
                </form>

                <p className="warning-text">{warning}</p>
            </div>
        </section>
    )
}

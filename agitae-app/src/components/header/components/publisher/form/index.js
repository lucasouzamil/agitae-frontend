import Db from "../../../../../db";
import React, { useState } from "react";
import './form.css'

const API_POST_EVENT = 'http://127.0.0.1:8000/events/api/';

function postEvent(eventData) {
    fetch(API_POST_EVENT, {
        method: 'POST',
        body: eventData,
    })
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
async function checkEventExistence(eventData) {
    const db = await Db.getDb();
    const events = db.events;

    for (let key in events) {
        const event = events[key];
        console.log('nomes: ' +event.name+' '+ eventData.get('name'));
        console.log('urls: ' +event.url+' '+ eventData.get('url'));
        console.log('\n\n\n');
        if (event.name === eventData.get('name') || event.url === eventData.get('url')) {
            console.log('AAAAAAAAAAAE')
            return true;
        }
    }
    console.log('EAAAAAaa')
    return false;
}
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

export default function Form(props) {
    const [warning, setWarning] = useState('');
    const [warningColor, setWarningColor] = useState('white');
    const [imageURL, setImageURL] = useState('../assets/img/placeholder_image.png');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWarningColor('red');

        const formData = new FormData(e.target);
        const imageFile = e.target.image.files[0];
        if (imageFile !== undefined) {
            formData.append('image', imageFile);
        } else {
            formData.image = null;
        }

        if (formCheck(formData).length > 0) {
            setWarning(formCheck(formData));
        }
        else {
            if (await checkEventExistence(formData)) {
                setWarning('Este evento já foi publicado.');
            } else {
                setWarningColor('green');
                setWarning('Evento publicao!');
                postEvent(formData);
            }
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageURL(imageUrl);
        }
    };

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="headerForm">
                <div className="image-inputbutton">
                    <div className="blockImageInput">
                        {imageURL && (
                            <img
                                className="ImageInput"
                                src={imageURL}
                                alt="Imagem selecionada"
                            />
                        )}
                    </div>
                </div>
                <div className="headerinputs">
                    <div className="fitInput">
                        <input
                            className="input-form"
                            type="text"
                            maxLength="50"
                            id="name-input"
                            placeholder="Nome do evento"
                            name="name"
                        />
                    </div>
                    <div className="fitInput">
                        <textarea
                            className="input-form"
                            type="text"
                            maxLength="1000"
                            id="description-input"
                            placeholder="Descrição do evento"
                            name="description"
                        />
                    </div>
                    <div className="fitInput">
                        <input
                            className="input-form"
                            type="url"
                            id="url-input"
                            placeholder="Link do evento"
                            name="url"
                        />
                    </div>
                </div>
            </div>
            <div className="upload-btn-wrapper">
                <button className="btn-file">Escolher Imagem</button>
                <input onChange={handleImageChange} type="file" name="image" id="image-input" accept="image/*" className="custom-file-input" />
            </div>
            <div className="number-data-form">
                <input
                    className="input-form"
                    type="date"
                    id="date-input"
                    placeholder="Data do evento"
                    name="date"
                />
                <input
                    className="input-form"
                    type="time"
                    id="time-input"
                    placeholder="Hora do evento"
                    name="time"
                />
            </div>
            <div className="estado-cidade">
                <input
                    className="input-form"
                    type="text"
                    maxLength="50"
                    id="local-name-input"
                    placeholder="Nome do local do evento"
                    name="local_name"
                />
                <input
                    className="input-form"
                    type="text"
                    maxLength="50"
                    id="state-input"
                    placeholder="Estado"
                    name="state"
                />
                <input
                    className="input-form"
                    type="text"
                    maxLength="50"
                    id="city-input"
                    placeholder="Cidade"
                    name="city"
                />
            </div>
            <div className="neighborhood-street-number">
                <input
                    className="input-form"
                    type="text"
                    maxLength="50"
                    id="neighborhood-input"
                    placeholder="Bairro"
                    name="neighborhood"
                />
                <input
                    className="input-form"
                    type="text"
                    maxLength="50"
                    id="street-input"
                    placeholder="Rua"
                    name="street"
                />
                <input
                    className="input-form"
                    type="number"
                    id="number-input"
                    placeholder="Número"
                    name="number"
                />
            </div>
            <div className="footer-form">
                <button className="btn-form" type="submit">
                    PUBLICAR EVENTO
                </button>
                <p className="warning-text" style={{color:warningColor}}>{warning}</p>
            </div>
        </form>
    )
}

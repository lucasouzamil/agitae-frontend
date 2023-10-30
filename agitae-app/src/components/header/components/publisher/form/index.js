import Db from "../../../../../db";
import React, { useState } from "react";
import './form.css'

const API_POST_EVENT = 'http://127.0.0.1:8000/events/api/';

async function postEvent(eventData) {
    try {
        const response = await fetch(API_POST_EVENT, {
            method: 'POST',
            body: eventData,
        });

        if (!response.ok) {
            throw new Error('Erro na solicitação');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}
function addEventToSubType(eventId, subtypeid) {
    const data = {
        event: eventId
    };

    fetch(`http://127.0.0.1:8000/eventsubtypes/api/${subtypeid}/add_event/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação');
            }
            return response.json();
        })
        .then(data => {
            console.log('Evento adicionado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao adicionar evento:', error);
        });
}
async function checkEventExistence(eventData) {
    const db = await Db.getDb();
    const events = db.events;

    for (let key in events) {
        const event = events[key];
        console.log('nomes: ' + event.name + ' ' + eventData.get('name'));
        console.log('urls: ' + event.url + ' ' + eventData.get('url'));
        console.log('\n\n\n');
        if (event.name === eventData.get('name') || event.url === eventData.get('url')) {
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

    const typesData = [
        {
            "id": "b3ada38c-4f38-4436-88c9-5e5aa6a53526",
            "name": "Culinária",
            "subtypes": [
                "11c81b43-667b-43b5-b32e-07319e0ef57f",
                "3148acd0-f05d-4f90-a601-d8f69aaf2fde",
                "4fdc93ab-907f-43ee-b870-653002aa3998",
                "a09261b6-57f7-4290-848b-f68b438b31c2",
                "aa8c2fff-804a-4c16-b903-d6beb7aaa64c",
                "c71fb554-7ef6-408a-b418-fe03798c28f9"
            ]
        },
        {
            "id": "3b187d11-f5d7-435c-b467-05d938289c64",
            "name": "Cultural",
            "subtypes": [
                "268c5da0-e0a5-4d3a-9700-c4a0444d644a",
                "2ba83d56-4ef7-4542-b5eb-56fd2f6c7184",
                "5588e0dc-136d-4df2-9c99-832163040a08",
                "84c3d421-b8e5-4e86-b5b7-419b671ad657",
                "b33a3a31-6e34-4ead-a90c-1f450ef8f42b"
            ]
        },
        {
            "id": "ffd14540-1428-46b8-8b6f-749d84d5a647",
            "name": "Música",
            "subtypes": [
                "17b53d22-b53a-43ed-92c0-ec430eb0d126",
                "181851de-46eb-4509-9c01-8e8b032ad5ab",
                "4c29d20c-4533-4e21-9267-6cbe64bf189f",
                "727807a9-305f-42e7-a1d1-ea8605273537",
                "de45e62b-6878-4aad-b5db-81259f60a5ac",
                "ee33dae4-d13a-406c-a6fc-14dee521573d"
            ]
        }
    ];
    const subTypesData = [
        {
            "id": "3148acd0-f05d-4f90-a601-d8f69aaf2fde",
            "name": "Americanas",
            "events": []
        },
        {
            "id": "aa8c2fff-804a-4c16-b903-d6beb7aaa64c",
            "name": "Brasileiras",
            "events": []
        },
        {
            "id": "4fdc93ab-907f-43ee-b870-653002aa3998",
            "name": "Francesas",
            "events": []
        },
        {
            "id": "11c81b43-667b-43b5-b32e-07319e0ef57f",
            "name": "Italianas",
            "events": []
        },
        {
            "id": "a09261b6-57f7-4290-848b-f68b438b31c2",
            "name": "Japonesas",
            "events": []
        },
        {
            "id": "c71fb554-7ef6-408a-b418-fe03798c28f9",
            "name": "Mediterrâneas",
            "events": []
        },
        {
            "id": "84c3d421-b8e5-4e86-b5b7-419b671ad657",
            "name": "Esportes",
            "events": []
        },
        {
            "id": "b33a3a31-6e34-4ead-a90c-1f450ef8f42b",
            "name": "Galerias",
            "events": []
        },
        {
            "id": "2ba83d56-4ef7-4542-b5eb-56fd2f6c7184",
            "name": "Museus",
            "events": []
        },
        {
            "id": "5588e0dc-136d-4df2-9c99-832163040a08",
            "name": "Standups",
            "events": []
        },
        {
            "id": "268c5da0-e0a5-4d3a-9700-c4a0444d644a",
            "name": "Teatros",
            "events": []
        },
        {
            "id": "727807a9-305f-42e7-a1d1-ea8605273537",
            "name": "Baladas",
            "events": []
        },
        {
            "id": "17b53d22-b53a-43ed-92c0-ec430eb0d126",
            "name": "Brasilidades",
            "events": []
        },
        {
            "id": "de45e62b-6878-4aad-b5db-81259f60a5ac",
            "name": "Eletrônicas",
            "events": []
        },
        {
            "id": "4c29d20c-4533-4e21-9267-6cbe64bf189f",
            "name": "Festivais",
            "events": []
        },
        {
            "id": "ee33dae4-d13a-406c-a6fc-14dee521573d",
            "name": "Sertanejos",
            "events": []
        },
        {
            "id": "181851de-46eb-4509-9c01-8e8b032ad5ab",
            "name": "Universitárias",
            "events": []
        }
    ];

    const [selectedType, setSelectedType] = useState(typesData[0].id);
    const type = typesData.find((type) => type.id === selectedType);
    const filteredSubTypes = subTypesData.filter((item) => type.subtypes.includes(item.id));
    const elements2 = filteredSubTypes.map((item) => (
        <option key={`node_id_${item.id}`} value={item.id}>{item.name}</option>
    ));
    const [selectedSubTypes, setSelectedSubTypes] = useState(elements2);
    const [warning, setWarning] = useState('');
    const [warningColor, setWarningColor] = useState('red');
    const [imageURL, setImageURL] = useState('../assets/img/placeholder_image.png');

    const handlePost = async (e) => {
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
                const element = document.getElementById("selectedSubType");
                const subtype_id = element.value;
                const event = await postEvent(formData);
                console.log(subtype_id, event.id);
                addEventToSubType(event.id, subtype_id);
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

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        const type = typesData.find((type) => type.id === e.target.value);
        const filteredSubTypes = subTypesData.filter((item) => type.subtypes.includes(item.id));
        const elements2 = filteredSubTypes.map((item) => (
            <option key={`node_id_${item.id}`} value={item.id}>{item.name}</option>
        ));
        setSelectedSubTypes(elements2);
    }


    return (
        <form encType="multipart/form-data" onSubmit={handlePost}>
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
                        <div className="btnposition">
                            <div className="upload-btn-wrapper">
                                <button className="btn-file">Escolher Imagem</button>
                                <input onChange={handleImageChange} type="file" name="image" id="image-input" accept="image/*" className="custom-file-input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerinputs">
                    <div className="fitInput">
                        <label className="label" htmlFor="name">Nome do evento:</label>
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
                        <label className="label" htmlFor="description">Descrição:</label>
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
                        <label className="label" htmlFor="url">Link:</label>
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
            <div className="subtypes-choices">
                <div className="selectArea">
                    <label className='label' htmlFor="selectedType">Tipo do evento:</label>
                    <select className="optionsInput" id="selectedType" name="eventType" onChange={handleTypeChange}>
                        {typesData.map((item) => (
                            <option key={`node_id_${item.id}`} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="selectArea">
                    <label className='label' htmlFor="selectedSubType">Sub tipo do evento:</label>
                    <select className="optionsInput" id="selectedSubType" name="eventSubType">
                        {selectedSubTypes};
                    </select>
                </div>
            </div>
            <div className="number-data-form">
                <div className="fitInput" id='date'>
                    <label className="label" htmlFor="date">Data:</label>
                    <input
                        className="input-form"
                        type="date"
                        id="date-input"
                        placeholder="Data do evento"
                        name="date"
                    />
                </div>
                <div className="fitInput" id='time'>
                    <label className="label" htmlFor="date">Hora:</label>
                    <input
                        className="input-form"
                        type="time"
                        id="time-input"
                        placeholder="Hora do evento"
                        name="time"
                    />
                </div>
            </div>
            <div className="estado-cidade">
                <div className="fitInput" id='local-name'>
                    <label className="label" htmlFor="local_name">Nome do local:</label>
                    <input
                        className="input-form"
                        type="text"
                        maxLength="50"
                        id="local-name-input"
                        placeholder="Nome do local do evento"
                        name="local_name"
                    />
                </div>
                <div className="fitInput" id='state'>
                    <label className="label" htmlFor="state">Estado:</label>
                    <input
                        className="input-form"
                        type="text"
                        maxLength="50"
                        id="state-input"
                        placeholder="Estado"
                        name="state"
                    />
                </div>
                <div className="fitInput" id='city'>
                    <label className="label" htmlFor="city">Cidade:</label>
                    <input
                        className="input-form"
                        type="text"
                        maxLength="50"
                        id="city-input"
                        placeholder="Cidade"
                        name="city"
                    />
                </div>
            </div>
            <div className="neighborhood-street-number">
                <div className="fitInput" id='neighborhood'>
                    <label className="label" htmlFor="neighborhood">Bairro:</label>
                    <input
                        className="input-form"
                        type="text"
                        maxLength="50"
                        id="neighborhood-input"
                        placeholder="Bairro"
                        name="neighborhood"
                    />
                </div>
                <div className="fitInput" id='street'>
                    <label className="label" htmlFor="street">Rua:</label>
                    <input
                        className="input-form"
                        type="text"
                        maxLength="50"
                        id="street-input"
                        placeholder="Rua"
                        name="street"
                    />
                </div>
                <div className="fitInput" id='number'>
                    <label className="label" htmlFor="number">Número:</label>
                    <input
                        className="input-form"
                        type="number"
                        id="number-input"
                        placeholder="Número"
                        name="number"
                    />
                </div>
            </div>
            <div className="footer-form">
                <button className="btn-form" type="submit">
                    PUBLICAR EVENTO
                </button>
                <p className="warning-text" style={{ color: warningColor }}>{warning}</p>
            </div>
        </form>
    )
}

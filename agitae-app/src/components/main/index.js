import Db from "../../db";
import React, { useState, useEffect } from "react";
import './main.css'
import ExploreIcon from '@mui/icons-material/Explore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import ScrollRow from './components/scrollrow'
import EventType from './components/eventType'
import EventSubType from './components/eventSubType'
import Event from './components/event'

export default function Main(props) {

    /* const typesData = [
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
    ]; */

    const [elements, setElements] = useState([]);
    const [typesData, setTypesData] = useState([]);
    const [subTypesData, setSubTypesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedSubType, setSelectedSubType] = useState(null);

    useEffect(() => {
        Db.getDb()
            .then((res) => {
                console.log(res);
                setElements(res.events);
                setTypesData(res.event_types);
                setSubTypesData(res.event_sub_types);
                if (res.event_types.length > 0) {
                    setSelectedType(res.event_types[0].id);
                }
                if (res.event_sub_types.length > 0) {
                    setSelectedSubType(res.event_sub_types[0].id);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar os dados da API', error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div>Carregando...</div>;
    }

    const changeType = (typeId) => {
        setSelectedType(typeId);
        const type = typesData.find((type) => type.id === typeId);
        const filteredSubTypes = subTypesData.filter((item) => type.subtypes.includes(item.id));
        setSelectedSubType(filteredSubTypes[0].id);
    };


    const typesElements = typesData.map((item) => (
        <EventType name={item.name} db_id={item.id} setType={changeType} ></EventType>
    ));
    const type = typesData.find((type) => type.id === selectedType);
    const filteredSubTypes = subTypesData.filter((item) => type.subtypes.includes(item.id));
    const subTypesElements = filteredSubTypes.map((item) => (
        <EventSubType type={type.name} db_id={item.id} name={item.name} setSubType={setSelectedSubType} ></EventSubType>
    ));

    const subType = subTypesData.find(item => item.id === selectedSubType);
    const filteredEventsId = subType.events;
    const filteredEvents = elements.filter(item => filteredEventsId.includes(item.id));


    const typeName = (typesData.find((type) => type.id === selectedType)).name;
    const subTypeName = (subTypesData.find((type) => type.id === selectedSubType)).name;



    //console.log(typesData.find((type) => type.id === selectedType).name, subTypesData.find((subType) => subType.id === selectedSubType).name);

    return (
        <main color-theme={props.theme}>
            <section className="section-main">
                <div className="section-main-header">
                    <ExploreIcon className="section-main-header-icon" style={{ fontSize: 40 }}></ExploreIcon>
                    <p className="section-title" id='section-main-header-icon-title'>Explorar</p>
                </div>
                <ScrollRow elements={typesElements} scrollId='0'></ScrollRow>
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <FilterAltIcon className="section-main-header-icon" style={{ fontSize: 40 }}></FilterAltIcon>
                    <p className="section-title" id='section-main-header-icon-title'>{typeName}</p>
                </div>
                <ScrollRow elements={subTypesElements} scrollId='1' change={selectedType}></ScrollRow>
            </section>
            <section className="section-main">
                <div className="section-main-header">
                    <LocationSearchingIcon className="section-main-header-icon" style={{ fontSize: 40 }}></LocationSearchingIcon>
                    <p className="section-title">{subTypeName}</p>
                </div>
                <div className="events">
                    {filteredEvents.map((item) => (
                        <Event key={`note__${item.id}`} eventdata={item}></Event>
                    ))}
                </div>
            </section>
        </main>
    );
}
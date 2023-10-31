import axios from "axios";

const API_BASE = 'http://127.0.0.1:8000/';

const basicFetch = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return null;
    }
};

const Db = {
    getDb: async () => {
        try {
            const db = {
                events: await basicFetch('events/api/'),
                event_types: await basicFetch('eventtypes/api/'),
                event_sub_types: await basicFetch('eventsubtypes/api/'),
            };

            return db;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },

    getEvents: async () => {
        try {
            console.log('PEGA EVENTOOO')
            const evensts = await basicFetch('events/api/');
            return evensts;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar eventos:", error);
        }
    },

    getTypes: async () => {
        try {
            const event_types = await basicFetch('eventtypes/api/');
            return event_types;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar tipos de eventos:", error);
        }
    },

    getSubTypes: async () => {
        try {
            const event_sub_types = await basicFetch('eventsubtypes/api/');
            return event_sub_types;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar subtipos:", error);
        }
    }
};

export default Db;

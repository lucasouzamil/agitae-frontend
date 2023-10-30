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
                event_types: await basicFetch('eventtypes/api/'),
                event_sub_types: await basicFetch('eventsubtypes/api/'),
                events: await basicFetch('events/api/'),
            }

            /* const all_event_types = {
                id: 0,
                name: 'Todos',
                subtypes: event_sub_types.map((subtype) => subtype.id),
            };

            const all_events = {
                id: 0,
                name: 'Todos',
                events: events.map((event) => event.id),
            };
            

            const db = {
                events: events,
                event_types: [all_event_types, ...event_types],
                event_sub_types: [all_events, ...event_sub_types],
            }; */

            return db;

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },
};

export default Db;

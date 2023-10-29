import axios from "axios";

const API_BASE = 'http://127.0.0.1:8000/'

const basicFetch = async (endpoint) => {
    const req = await axios.get(`${API_BASE}${endpoint}`);
    const json = await req.data; 
    return json;
}

const Db = {
    getDb: async () => {
        return {
            events: await basicFetch('events/api/'),
            event_types: await basicFetch('eventtypes/api/'),
            event_sub_types: await basicFetch('eventsubtypes/api/'),
        }
    }
}

export default Db;
import axios from 'axios';

const  geocode = axios.create({
    baseURL: 'http://open.mapquestapi.com/geocoding/v1'
});

export default geocode;

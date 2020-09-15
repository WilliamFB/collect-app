import axios from 'axios';

const key = '';

const  geocode = axios.create({
    baseURL: 'http://open.mapquestapi.com/geocoding/v1'
});

export { geocode, key};

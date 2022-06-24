import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tidr-backend.herokuapp.com',
});

export default instance;
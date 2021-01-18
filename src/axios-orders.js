import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c2556.firebaseio.com/'
});

export default instance;
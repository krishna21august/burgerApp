import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerapp-8c41d.firebaseio.com/',
});

export default instance;
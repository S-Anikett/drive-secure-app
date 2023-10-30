import Axios from 'axios';

const request = Axios.create({
    baseURL: 'https://o263rmd9qf.execute-api.ap-south-1.amazonaws.com',
});

request.interceptors.request.use(oldConfig => {
    const newConfig = {...oldConfig};

    return {
        ...newConfig,
        headers: {
            'Content-Type': 'application/json',
        },
    };
});

export {request};

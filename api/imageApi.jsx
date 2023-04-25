import axios from 'axios';

let consumirSinSeguridadJson = axios.create({ baseURL: 'https://api.nasa.gov/planetary' });


const imageNasa = async(address, params) => {

    const result = await consumirSinSeguridadJson.get(address, {params}).then((response) => {

        const { status, data } = response;

        return {
            status,
            explanation: data.explanation,
            title: data.title,
            url: data.url
        };

    }).catch((error) => {

        console.log( JSON.stringify(error));

        const { status, message, name } = error;

        return {
            status,
            explanation: message,
            title: name,
            url: ''
        };

    });

    return result;

}


export default imageNasa;
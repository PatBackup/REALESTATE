import axios from "axios";

export const baseUrl =  'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '152fdc5502mshe268a06f162f6e0p1a0b54jsn1400e05af997',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}
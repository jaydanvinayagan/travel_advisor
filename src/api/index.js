import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {

        const {data: {data} } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'be7cb3444amsh1c8e0564f11704fp1a7be5jsnecafc5b8ea0d'
          }
        });
        return data;

    } catch (error) {
        console.log(error);

    }
}
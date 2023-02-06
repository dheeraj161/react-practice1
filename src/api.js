

import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID 47Xh-lMHeBdA7i7CYHuU93U1tpa8_qV3FuzycZ7kAG4'
        },
        params: {
            query: term
        }
    });
    console.log(response.data.results);
    return response.data.results;
}
export default searchImages;
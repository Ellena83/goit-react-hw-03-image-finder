import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
    key: '30765858-fc152abb5827d9103dadc3f2f',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

export const fetchImages = async (query, currentPage) => {
    try {
        const { data } = await axios.get(
            `/?q=${query}&page=${currentPage}`);
        return data
    }
    catch (e) {
        this.console.error(e);
    }
}

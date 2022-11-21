import axios from 'axios';
const APIKEY = "30325215-4f4b62b7b42e30a3a20b05ae5";

export const serchImg = (searchWord,page) => {
    return axios(`https://pixabay.com/api/?q=${searchWord}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    ).then(obj=>obj.data).catch((error)=>console.log(error))
}
import axios from "axios";
import {baseUrl} from "../const";


const getAll = async () => {
    const {data} = await axios.get(`${baseUrl}/categories`);

    return data;
}

const get = async (id) => {
    const {data} = await axios.get(`${baseUrl}/categories/${id}`);

    return data;
}

export default {get, getAll};
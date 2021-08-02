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

const create = async (category) => {
    return axios.post(`${baseUrl}/categories`, {category})
}

const update = async (category) => {
    return axios.put(`${baseUrl}/categories`, {category})
}

export default {get, getAll, create, update};
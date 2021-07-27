import axios from "axios";
import {baseUrl} from "../const";

const getAll = async () => {
    const {data} = await axios.get(`${baseUrl}/sold-items`);

    return data;
}

export default {getAll};
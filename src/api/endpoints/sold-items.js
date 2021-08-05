import axios from "axios";
import {baseUrl} from "../const";

const getAll = async () => {
    const {data} = await axios.get(`${baseUrl}/sold-items`);

    return data;
}

const manualSort = async (file) => {
    const formData = new FormData();

    formData.append('file', file);

    const {data} = await axios.post(`${baseUrl}/sold-items/manual-sort`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob"
    });

    return data;
};

export default {getAll, manualSort};
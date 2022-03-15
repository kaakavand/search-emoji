import axios from "axios";
import { API_INFO } from "../config/api.config";

class HttpService {
    constructor() {
        axios.defaults.baseURL = API_INFO.URL;
        axios.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    get(url, config) {
        return axios.get(url, config);
    }

    post(url, data, config) {
        return axios.post(url, data, config);
    }

    put(url, data, config) {
        return axios.put(url, data, config);
    }

    patch(url, data, config) {
        return axios.patch(url, data, config);
    }

    delete(url, data, config) {
        return axios.delete(url, data, config);
    }
}

export default new HttpService();

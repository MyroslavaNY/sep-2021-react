import axios from "axios";
import baseUrl from "../config/url";

export const axiosService = axios.create({
    baseURL:baseUrl
    });





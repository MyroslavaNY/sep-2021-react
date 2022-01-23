import {axiosService} from "./axios.service";
import {urls} from "../config/url"

export const userService = {
    getAll:()=>axiosService.get(urls.users)
        .then(value => value.data)
}
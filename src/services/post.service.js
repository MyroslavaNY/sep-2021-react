import {axiosService} from "./axios.service";
import {urls} from "../config/url"

export const postService = {
    getByUserId:(id)=>axiosService.get(`${urls.posts}?userId=${id}`)

}
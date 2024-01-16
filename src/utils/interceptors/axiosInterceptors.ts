import axios from "axios";
import toastr from "toastr";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",

});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = "My Token";
    return config;
});
axiosInstance.interceptors.response.use((value) => {
    console.log("Başarılı bir cevap alındı..");
    return value;
    },
    error => {
        console.log("Bir hata ile karşılaşıldı", error.response.data.message);
        toastr.error(error.response.data.message);
        return error;
    },
);

export default axiosInstance;

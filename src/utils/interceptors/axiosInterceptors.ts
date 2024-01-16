import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",

});

axiosInstance.interceptors.request.use((config:any) => {
    console.log("Bir istek atıldı..");
    return config;
});
axiosInstance.interceptors.response.use((value) => {
    console.log("Başarılı bir cevap alındı..");
    return value;
})

export default axiosInstance;

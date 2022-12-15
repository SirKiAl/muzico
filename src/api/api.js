import axios from "axios";




const instance = axios.create({
   baseURL: 'http://127.0.0.1:8000/',
   withCredentials: false,
   crossDomain: true,

});


export const musicAPI = {

   getMusic() {
      return instance.get(`main/`)
         .then(response => {
            return response.data;
         });
   },
   


}
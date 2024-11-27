import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {
    var config = useRuntimeConfig();
    var base = config.public.BASE_URL as string;
    var a = axios.create({
        baseURL:base
    });
    return {
        provide:{
            axios:a
        }
    }
})

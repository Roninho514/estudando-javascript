postsFetch.interceptors.request.use(
    function (config){
        console.log("Antes da requesição...");
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);



postsFetch.interceptors.response.use(
    function (response){
        console.log("Antes da requesição...");
        return response;
    },
    function (error){
        return Promise.reject(error);
    }
);
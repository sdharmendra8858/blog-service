const axios = require("axios");

const apiCall = async (url, method, payload, headers, authorization = true) => {
    console.log("----- In ApiCall apiCall method -----");
    console.log("calling url ===> ", url);
    try{
        const response = await axios({
            method,
            url,
            data: payload,
            headers
        })

        return Promise.resolve(response.data);
    }catch(err){
        console.error("----- Error in ApiCall apiCall method -----", err);
        return Promise.reject(err);
    }
}

module.exports = {
    apiCall
}
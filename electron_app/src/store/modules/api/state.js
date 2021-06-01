export default {
    API_URL :  "https://fysioapi2.azurewebsites.net/",
    API_URL_DEV: "http://localhost:49154",
    API_URL_DEV_HTTPS: "https://localhost:49153",
    endpoints: {
        auth: {
            login: {extension: "auth/login", method: "POST"},
            register: {extension: "auth/register", method: "POST"}
        }
    }
}
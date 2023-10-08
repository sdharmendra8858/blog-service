module.exports = {
    USER_SERVICE: {
        baseUrl: process.env.USER_SERVICE,
        create: {
            endpoint: "/me",
            method: "get"
        }
    }
}
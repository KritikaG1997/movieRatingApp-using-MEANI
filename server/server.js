// exported file's folders
const app = require("./config/express");
const message = require("./responsesMessage/messages");
const dbConnection = require("./db-connection/connection");

// contecting to the server for running our backend
app.listen(8080, () => {
    console.log(message.consoleMessage.message.serverConnection);
});
const express = require('express');
const app = express();
const cors = require('./config/cors');
const server = require('./enviorment');
const initDatabase = require('./config/db');
const routes = require('./routes');
const authMiddleware = require('./middlewares/authMiddle');

app.unsubscribe(cors());
app.use(express.json());
app.use(authMiddleware);
app.use(routes);
//Init DB
initDatabase()
.then(() => {
    app.listen(server.PORT, () => console.log(`Server listening on port ${server.PORT}`));
})
.catch((error) => console.log(error));
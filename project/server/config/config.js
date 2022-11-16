const env = 'development';

const config = {
    development: {
        port: 3000,
        databaseURL: 'mongodb://127.0.0.1:27017/test-server',
        origin: ['http://localhost:4200']
    }
}

module.exports = config[env];
module.exports = () => (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'accept, accept-encoding, access-control-allow-headers, access-control-allow-origin, content-type, accept-language');
    next();
};
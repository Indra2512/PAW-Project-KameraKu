const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const path = req.originalUrl || req.url;

    res.on('finish', () => {
        const statusCode = res.statusCode;
        console.log(`[${timestamp}] ${method} ${path} - Status: ${statusCode}`);
    });

    next();
};

module.exports = loggerMiddleware;
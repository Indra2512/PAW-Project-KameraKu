const successResponse = (res, statusCode, mesasge, data) => {
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data
    });
};

module.exports = { successResponse };
const asyncHandler = (requesthandler) => (req, res, next) => {
    Promise.resolve(requesthandler(req, res, next)).catch(error => next(error));
}




export { asyncHandler };












/*const asyncHandler = (fn) => async(req, res, next) => {

    try {
        awit fn(req, res, next);
        
    } catch (error) {
        resizeBy.status(error.code ||500).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
        
    }
}*/
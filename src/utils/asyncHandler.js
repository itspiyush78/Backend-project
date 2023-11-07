// const asyncHandler = () => {}


export {asyncHandler}





// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}    


const asyncHandler = (fn) => (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(err.code  )
    }
}
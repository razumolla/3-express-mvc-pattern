const errorHandler = (err, req,res,next)=>{
    res.send(error.message)
}

module.exports = errorHandler;

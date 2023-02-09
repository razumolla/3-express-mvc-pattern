
let count=0;

const viewCount =(req, res,next)=>{
    count++;
    console.log(count)

    // res.send('tool founded')
    next();
}
module.exports=viewCount;
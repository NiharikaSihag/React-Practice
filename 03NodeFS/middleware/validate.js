const validate = async (req, res, next) => {
    if(req.body.email){
       next();
    }
    else{
        res.status(400).json({message: 'Not valid email'})
    }
}
export default validate;
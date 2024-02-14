const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const registerHandler = async( req , res) =>{
    try{
        const {buisnessName, buisnessEmail, password} = req.body;

         
          const ExistingUser = await User.findOne({buisnessEmail});

         if(buisnessName !== "" && buisnessEmail !== "" && password !== ""){
            
            if(!ExistingUser){
                const securePassword = await bcrypt.hash(password , 10);
                const NewUser = new User({buisnessName, buisnessEmail, password: securePassword});
                await NewUser.save();
                res.json({message:'User created success'});
            }
            else{
                res.json({message:'You are already an user'});
            }
         }
         else{
            res.json({message:'Please provide all feilds'});
         }  
    }
    catch(error){
        console.log(error);
        res.json({message:'Internal server error'});
    }
}


const loginHandler = async(req , res)=>{
    try{
        const {buisnessEmail, password} = req.body;
        const isUser = User.findOne({buisnessEmail});

        if(buisnessEmail !== '' && password !== ''){
            if(isUser){
                const comparePassword = await bcrypt.compare(password , isUser.password);
                if(comparePassword){
                    
                    res.json({message:'Login success'});
                }
                else{
                    res.json({message:'Password does not match'});
                }
            }
            else{
                res.json({message:'User not found'});
            }
        }
        else{
            res.json({message:'Please provide all feilds'})
        }
    }
    catch(error){
        console.log(error);
        res.json({message:'Internal server error'})
    }
}




module.exports = {registerHandler,
                  loginHandler};

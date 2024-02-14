const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const registerHandler = async( req , res) =>{
    try{
        const {buisnessName, buisnessEmail, password} = req.body;

         const ExistingUser = User.findOne({buisnessEmail});

         if(buisnessName ==! '' && buisnessEmail ==! '' && password ==! ''){
            if(!ExistingUser){
                const securePassword = await bcrypt.hash(password , 10);
                const NewUser = new User({buisnessName, buisnessEmail, password});
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
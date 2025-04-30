const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const Schema =mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
  email:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
});


userSchema.statics.login = async function(email,password){
  if(!email || !password){
    throw Error('All Fields are required!');
  }
  const user = await this.findOne({email});
  if(!user){
    throw Error('Email Not Exist');
  }
  const match = await bcrypt.compare(password,user.password);
  if(!match){
    throw Error('Invalid Password');
  }
  return user;
}


userSchema.statics.signUp = async function(email,password){
    if(!email || !password){
      throw Error('All Fields Are Required!');
    }
    if(!validator.isEmail(email)){
      throw Error('Email is not Valid');
    }
    const exist = await this.findOne({email});
    if(exist){
      throw Error('Email Already in Use');
    }
    if(!validator.isStrongPassword(password)){
      throw Error('Password is not Strong!');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hash});
    return user;
}

module.exports = mongoose.model('User',userSchema);

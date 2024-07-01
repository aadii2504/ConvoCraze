import bcrypt from "bcryptjs";
import user from "../models/user.model.js";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
   try {
    const {fullName , username , password, confirmPassword, gender} =  req.body;
    if(password !== confirmPassword) {
        return res.status(400).json({error: "Password Don't Match"})
    }

    const user  =  await User.findOne({username});

    if(user) {
        return res.status(400).json({error: "Username already  exists"})
    }


    // HASH Password Here 
    const salt  =  await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(password ,  salt);
    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
	const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    
   if(newUser) {
    // generating the JWT token 
     generateTokenAndSetCookie(newUser._id , res)
    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
    });
   }else{
    res.status(400).json({error: "Invalid user data"});
   }
   } catch (error) {
    console.log("Error in SignUp Controller" , error.message);
    res.status(500).json({error: "Internal Server Error"})
   }
};

export const login = async (req, res) => {
    try {
        const {username , password} =  req.body;
        const user =  await User.findOne({username})
        const isPasswordCorrect  =   await bcrypt.compare(password , user?.password || "");
        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: " Invalid Username and Password"})
        }

        generateTokenAndSetCookie(user._id , res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic, 
        });   

    } catch (error) {
        console.log("Error in Login  Controller" , error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge: 0})
    res.status(400).json({message:"Logged Out Successfully"})
  } catch (error) {
    console.log("Error in Login  Controller" , error.message);
    res.status(500).json({error: "Internal Server Error"});
  } 
};


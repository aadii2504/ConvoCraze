import jwt from "jsonwebtoken";

const generateTokenAndSetCookie =  (userId , res) => {
  const token  =  jwt.sign({userId} , process.env.JWT_SECRET, {
    expiresIn: '15d' // 15 days
  })

  res.cookie("jwt" , token, {
    maxAge : 15 * 24  *  60 * 60 *  1000,
    httpOnly : true, /// to prevent xss attack  // to prevent client side scripting 
    sameSie:"strict", // to make sure that the cookie is only accessible by the main domain   CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV === "develiopment",
  });
};

 
export default generateTokenAndSetCookie; 


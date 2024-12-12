 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
 export const GenerateSalt = async () => {
    return await bcrypt.genSalt();
  };
  
  export const GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt);
  };

  export const GenerateSignature = async (payload) => {
    try {
      return await jwt.sign(payload,'jg_youtube_tutorial', { expiresIn: "30d" });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

 
import { GenerateSalt, GeneratePassword, GenerateSignature}  from "../Utils/index.js";
import CustomerRepository from "../database/Repository/customer-repository.js";
 
export default class CustomerService{
    constructor(){
        this.repository = new CustomerRepository();
    }

    async signUps(userInputs){
        
    const {email,password,phone} = userInputs;
    try{
    const salt = 647747;
    // let userPassword = await GeneratePassword(password, salt);

    const existingCustomer = await this.repository.CreateCustomer({ email, password, phone, salt});
            
    const token = await GenerateSignature({ email: email, _id: existingCustomer._id});

    return {id: existingCustomer._id, token };
    }
    catch(error){
        console.log("error data not found",+error);
    }
     
    }
}
import  CustomerSchema from "../Modals/customer.js";
export default class CustomerRepository{
   async CreateCustomer({name,email,phone,salt}){
    try{
        const Customer = new CustomerSchema({name,email,phone,salt,address:[]});
        const customerResult = Customer.save();
        return customerResult;
    }
    catch(e){
      console.log("error",+e);
    }

   }
}
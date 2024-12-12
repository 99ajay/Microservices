import CustomerService from '../Services/Customer-Service.js';
const Customer = (app)=>{
     const service = new CustomerService();
         app.post("/customer/signup",async(req,res,next)=>{
            try{
              const {email,password,phone} = req.body;
              const data = await service.signUps({email,password,phone});
              return res.json(data);

            }catch(error){
                console.log("error hai",error);
            }
         })
}

export default Customer;
const CustomerRepository = new CustomerRepository();

class CustomerService{
    constructor(){
        this.repository = CustomerRepository;
    }

    async signUps(userInputs){
        const {email,password,phone} = userInputs;

     
    }
}
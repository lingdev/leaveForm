module.exports = {

    friendlyName: 'User Detail ',

    description: 'User Detail for registeration  ',
    inputs: {
     
        email: {
            type: "string",
            required: true,
        },
        
      
        password: {
            type: "string",
            required: true,
        },
       

    },
  
    fn: async function (inputs) {
        console.log(inputs,"logggg");

      var loginin= await User.findOne({
          
            email: inputs.email,
            password: inputs.password,
           
        })
        console.log(loginin,"dddddddddddddddddd");
        return loginin

    

    }
}
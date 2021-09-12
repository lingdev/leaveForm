module.exports = {

    friendlyName: 'User Detail ',

    description: 'User Detail for registeration  ',
    inputs: {
       userName: {
            type: "string",
            required: true,
        },
       
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
        console.log(inputs,"lllllllllll");

      var reg = await User.create({
            userName: inputs.userName,
            email: inputs.email,
            password: inputs.password,
            
            
           
        })
        console.log(reg,"llllll");

          return (200, {
            success: true
          });

    }
}
module.exports = {

    friendlyName: 'User Detail ',

    description: 'User Detail for registeration  ',
    inputs: {
     
       

    },
  
    fn: async function (inputs) {
        

      var lev = await Leave.find()
        return lev

        //   return (200, {
        //     success: true
        //   });

    }
}
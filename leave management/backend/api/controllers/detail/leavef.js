module.exports = {

    friendlyName: 'User Detail ',

    description: 'User Detail for registeration  ',
    inputs: {
       userId: {
            type: "string",
        },
       
        fromDate: {
            type: "string",
        },
        toDate: {
            type: "string",
        },
        
      
        reason: {
            type: "string",
        },
       

    },
  
    fn: async function (inputs) {
        

      var lev = await Leave.create({
            userId: inputs.userId,
            fromDate: inputs.fromDate,
            toDate: inputs.toDate,
            reason: inputs.reason,

           
        }).fetch()

          return (200, {
            success: true
          });

    }
}
module.exports = {

    attributes: {
        userId: {
            type: "string",required: true,
        },
        fromDate: {
            type: "string",
        },
        toDate: {
            type: "string",
        },
        reason:{
            type: "string",

        },
              
        approval: { type: 'boolean', defaultsTo: false },
  

    }
}

module.exports = {

    attributes: {
        userName: {
            type: "string",required: true,
        },
      
        email: {
            type: 'string',required: true, unique: true
        },
      
        password: {
            type: "string", required: true,
        },
        role: {
            type: "string",
        },
     
    }
}

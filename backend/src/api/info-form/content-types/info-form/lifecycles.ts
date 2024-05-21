module.exports = {
    async afterCreate(event) {
        const {result } = event;
        try{
            await strapi.plugins['email'].services.email.send({
                to: 'geargather@hotmail.com',
                from: 'povedanot@gmail.com',
                subject: 'New info Form',
                text: ` Name: ${result.Name} / Email: ${result.Email} / Info: ${result.MoreInfo}`,


            })
        }catch(error){
            console.log(error);
        }
    }
}
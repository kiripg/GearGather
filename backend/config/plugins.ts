module.exports = ({ env }) => ({
  
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'povedanot@gmail.com',
          defaultReplyTo: 'povedanot@gmail.com',
        },
      },
    },
   
  });
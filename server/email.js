Meteor.methods({
    addEmail: function(email) {
        Accounts.addEmail(Meteor.userId(), email);
    },
    sendVerificationEmail: function(email) {
        Accounts.sendVerificationEmail(Meteor.userId(), email)
    }
})

Meteor.startup(function() {
    // 1. Set up smtp
    //   your_server would be something like 'smtp.gmail.com'
    //   and your_port would be a number like 25

    process.env.MAIL_URL = Meteor.settings.MAIL_URL;

    // 2. Format the email
    //-- Set the from address
    Accounts.emailTemplates.from = 'Delta Lab Web Admin <nudelta2015@gmail.com>';

    //-- Application name
    Accounts.emailTemplates.siteName = 'Delta Lab';

    //-- Subject line of the email.
    Accounts.emailTemplates.verifyEmail.subject = function(user) {
        return 'Confirm Your Email Address for Delta Lab';
    };

    //-- Email text
    Accounts.emailTemplates.verifyEmail.text = function(user, url) {
        return 'Thank you for registering. Please click on the following link to verify your email address: \r\n' + url;
    };

    // 3.  Send email when account is created
    Accounts.config({sendVerificationEmail: true});
});

Template.LoginPage.events({
  'click input': function(e) {
    e.stopPropagation();
  },
  'submit form': function(e) {
    e.preventDefault();
    var username = $('#login-username').val(),
      password = $('#login-password').val();
    if (username === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
    Meteor.loginWithPassword(username, password, function(err) {
      if (err !== undefined) {
        $('.alert').show()
      } else {
        Router.go('/');
      }
    });
  },
  'click #logout-button': function(e) {
    Meteor.logout();
  },
  'click #visitor-button': function(e) {
    Router.go('/');
  }
});

Template.LoginPage.helpers({
  'loggedIn': function() {
    return !!Meteor.user();
  },
  'isAdmin': function() {
    return Meteor.user().username == 'hzhang';
  }
});

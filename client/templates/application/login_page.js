Template.LoginPage.events({
  // 'keypress input': function(e) {
  //     $('.alert').hide()
  // },
  'click input': function(e) {
    // $('.alert').hide();
    e.stopPropagation();
  },
  'submit form': function(e) {
    //alert("something");
    e.preventDefault();
    //Router.go('/');
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

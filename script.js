gapi.load('client', function() {
  gapi.client.init({
    clientId: '1058688373100-7tqi8t8g8j775u7avkn3gl5f5v5ej456',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
  }).then(function() {
    var signinButton = document.getElementById('signin-button');
    var userInfoDiv = document.getElementById('user-info');
    var nameDiv = document.getElementById('name');
    var emailDiv = document.getElementById('email');
    var profileImg = document.getElementById('profile-photo');

    signinButton.addEventListener('click', function() {
      gapi.auth2.getAuthInstance().signIn().then(function() {
        var request = gapi.client.people.people.get({
          resourceName: 'people/me',
          personFields: 'names,emailAddresses,photos'
        });

        request.execute(function(resp) {
          var name = resp.names[0].displayName;
          var email = resp.emailAddresses[0].value;
          var photoUrl = resp.photos[0].url;

          nameDiv.innerText = name;
          emailDiv.innerText = email;
          profileImg.src = photoUrl;

          signinButton.style.display = 'none';
          userInfoDiv.style.display = 'block';
        });
      });
    });
  });

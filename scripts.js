function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  document.getElementById('user-image').src = profile.getImageUrl();
  document.getElementById('user-name').innerText = profile.getName();
  document.getElementById('user-email').innerText = profile.getEmail();

  document.querySelector('.g-signin2').style.display = 'none';
  document.getElementById('user-info').style.display = 'block';
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    document.querySelector('.g-signin2').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
  });
}

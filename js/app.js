// Search input
const searchUser = document.getElementById('searchUser');

// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

 
  if(userText !== '') {
    github.getUser(userText)
          .then(data => { 
            if(data.profile.message === 'Not Found') {
              // Show alert
              ui.showAlert('User not found', 'alert alert-danger');
            } else {
              // Show profile
              ui.showProfile(data.profile);
              // Show repos
              ui.showRepos(data.repos);
            }
          })
  } else {
    // Clear profile  
    ui.clearProfile();
  }
})




async function fetchProfileData() {
  const username = document.getElementById('username').value.trim();
  const loadingElement = document.getElementById('loading');
  const profileContainer = document.getElementById('profile');
  const profileDetails = document.getElementById('profile-details');
  const avatar = document.getElementById('avatar');
  const name = document.getElementById('name');
  const bio = document.getElementById('bio');
  const githubLink = document.getElementById('github-link');
  const repos = document.getElementById('repos');
  const followers = document.getElementById('followers');
  const following = document.getElementById('following');
  const Location = document.getElementById('Location');
  
    // if (!username) {
    //   alert('Please enter a GitHub username!');
    //   return;
    // }
  
    loadingElement.style.display = 'block';
    profileContainer.style.display = 'none';
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
  
      if (data.message === 'Not Found') {
        alert('User not found!');
        return;
      }
  
      avatar.src = data.avatar_url;
      name.textContent = data.name || 'No name available';
      bio.textContent = data.bio || 'No bio available';
      githubLink.href = data.html_url;
      githubLink.textContent = 'Visit GitHub Profile';
      repos.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      Location.textContent =data.location;
  
      loadingElement.style.display = 'none';
      profileContainer.style.display = 'block';
    } catch (error) {
      alert('Failed to fetch data from GitHub. Please try again.');
      loadingElement.style.display = 'none';
    }
  }
  document.querySelector('#username').addEventListener('keydown', (e)=>{
         if(e.key==='Enter'){
          fetchProfileData();
         }
  })

  document.querySelector('button').addEventListener('click', fetchProfileData)
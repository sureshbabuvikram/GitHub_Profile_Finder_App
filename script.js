// Function to fetch GitHub user data
async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();  // Wait for the JSON to be parsed
      
      // Display the user data on the page
      document.getElementById('name').textContent = userData.name || "No Name";
      document.getElementById('avatar').src = userData.avatar_url;
      document.getElementById('bio').textContent = userData.bio || "No bio available";
      
      // Set the GitHub profile link
      const profileLink = document.getElementById('profileLink');
      profileLink.href = userData.html_url;
      profileLink.textContent = "Go to GitHub Profile";
  
      // Show the user info section
      document.getElementById('userInfo').classList.remove('hidden');
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }
  
  // Attach an event listener to the button
  document.getElementById('fetchButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    
    if (username) {
      fetchGitHubUser(username);
    } else {
      alert("Please enter a GitHub username.");
    }
  });
  
  
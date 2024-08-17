function searchTopic() {
  const query = document.getElementById('searchInput').value;
  if (query.trim() === '') {
    alert('Please enter a search term.');
    return false;
  }
  // Simulate search functionality or navigate to a search results page
  alert('You searched for: ' + query);
  return false; // prevent form submission for demo purposes
}

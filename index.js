const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';
const token = '';

function getToken() {
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response=> response.json())
  .then(reply=> showResults(reply));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `a href=$(json.html_url)>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

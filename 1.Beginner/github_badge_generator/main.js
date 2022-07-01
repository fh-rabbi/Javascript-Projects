let generate = document.querySelector('.generate');
let username = document.querySelector('.username');
let reponame = document.querySelector('.reponame');
let text = document.querySelector('#text');
generate.addEventListener("click", badge_generate);

let user = '';
let repo = '';
function badge_generate(){
  if(username.value == '' || reponame.value == ''){
    text.value = 'Please type your username and reponame !';
    setTimeout(function() {
      text.value = '';
    }, 2000);
  }
  else{
    let user = username.value;
    let repo = reponame.value;
    let badge = `<a href="https://github.com/${user}/${repo}"><img title="${repo}" src="https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&theme=radical"></a>`;
    console.log(badge);
    text.value = badge;
    url();
  }
}

function url(){
  user = username.value;
  repo = reponame.value;
  // console.log(user,repo);
  let visit_link = document.querySelector('#visit_link');
  visit_link.style.opacity = 1;
  visit_link.onclick = function(){
  window.open(`https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&theme=radical`); 
 };
}
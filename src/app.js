const repos = document.getElementById("repo-list");

async function getRepo(user) {
  const result = await fetch(`https://api.github.com/users/${user}/repos`);
  let repos = await result.json();

  repos = filterRepos(repos);
  return repos;
}

function filterRepos(repos) {
  const foundRepos = [];

  for (repo of repos) {
    if (repo.fork) continue;

    repo.created_at = new Date(repo.created_at);
    foundRepos.push(repo);
  }

  const sortRepo = foundRepos.sort((a, b) => b.created_at - a.created_at);

  return sortRepo.slice(0, 12);
}

(async function () {
  for (repo of await getRepo("Cinarss")) {
    const repoDiv = document.createElement("a");
    repoDiv.innerText = repo.name;
    repoDiv.href = repo.html_url;
    repoDiv.target = "_blank";
    repos.appendChild(repoDiv);
  }
})();

document.body.onmousemove = (e) => {
  document.getElementById(
    "cordinates"
  ).innerText = `${e.clientX}X, ${e.clientY}Y`;
};

document.getElementById("date").innerText = Date.now();


$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()> 100){
      $(".btn").fadeIn();
    }
    else{
      $(".btn").fadeOut();
    }
  });

  $(".btn").click(function(){
    $("html,body").animate({scrollTop:0},700);
    return false;
  });

});

let b = "far -fa-sun";
let a = document.getElementById("dark-mode");
a.addEventListener("click", function(e){
  document.getElementsByTagName('body')[0].classList.toggle("dark-mode"); 
  document.querySelector("#dark-mode").classList.toggle('fa-sun')
  e.preventDefault();
  
});

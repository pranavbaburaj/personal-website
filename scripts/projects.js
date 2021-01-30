window.history.pushState({id:"100"}, "Page 2", "/projects")

function github(user) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
  
      xhr.open("GET", `https://api.github.com/users/pranavbaburaj/repos`);
      xhr.send(null);
  
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.status);
          }
        }
      };
    });
  }
  
  function github_repos() {
    const repo_list = document.querySelector("#user ul");
    repo_list.innerHTML = "";
    var ulElement = document.createElement("li");
    ulElement.innerText = "carregando...";
    repo_list.appendChild(ulElement);
    var l = []
  
    github("pranavbaburaj")
      .then((response) => {
        repo_list.innerHTML = "";
        for (res of response) {
          var ulElement = document.createElement("li");
          ulElement.classList.add("rp")
          ulElement.id = "lol"
          ulElement.innerText = res.name;
        //   ulElement.addEventListener('click', function(event){
        //       window.open(
        //           `https://github.com/pranavbaburaj/${this.innerHTML}`
        //       )
        //   })
          repo_list.appendChild(ulElement)
          l.push(ulElement)
        }
      })
      .catch((error) => {
        repo_list.innerHTML = "";
        var ulElement = document.createElement("li");
        ulElement.innerText = ` ${error}`;
        repo_list.appendChild(ulElement);
      });
    return l
  }

function searchFor(){
    const input = document.querySelector('.data')
    window.open(
        `https://github.com/pranavbaburaj?tab=repositories&q=${input.value.toString().replace(" ", "+")}`,
        "DescriptiveWindowName",
        "resizable,scrollbars,status"
      );
}

function checkKeyDown(event){
    if(event.keyCode == 13){
        searchFor()
    }
}



github_repos()
  
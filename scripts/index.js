// window.history.pushState({id:"100"}, "Page 2", "/data")

const discordButton = document.querySelector('.discord')
const modal = document.querySelector('.modal')
const project = document.querySelector('.projects')

discordButton.addEventListener('click', function(event){
    window.open(
        "https://discord.gg/cgByGXQEcW",
        "DescriptiveWindowName",
        "resizable,scrollbars,status"
      );
})

project.addEventListener('click', function(event){
    window.location.href = "/projects.html"
})
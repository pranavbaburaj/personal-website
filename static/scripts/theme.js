export const allThemes = {
    darkBackground : {
        theme : "#36393F",
        color : "white"
    },
    lightBackground : {
        theme : "#FFFFFF",
        color : "#000000"
    }
}

export function createNewTheme(themeColor){
    return {
        theme : themeColor
    }
}

export function getDefaultTheme(){
    var theme = localStorage.getItem('site-theme')
    if(theme == null){
        return createNewTheme(
            "dark"
        )
    } else {
        return theme
    }
}

function setTheme(theme) {
}
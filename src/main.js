
// Idiom

var idiom = window.localStorage.getItem('idiom') ? setIdiom() : 'pt-br'
const selectDoc = document.getElementById('select')

// theme object
let theme = {
    dark: {
        bg              : '#1E1E1E',
        link            : '#fff',
        primary_text    : '#fff'
    },
    light: {
        bg              : '#fff',
        link            : '#000',
        primary_text    : '#000'
    }
}

let options = [
    'pt-br', 'en', 'es', 'ja'
]

let idiomOption = 'pt-br'

if (window.localStorage.getItem('idiom')) {
    console.log('nntrou');
    idiomOption = window.localStorage.getItem('idiom')
}

selectDoc.innerHTML = options.map((item) => `<option value="${item}" ${idiom == item ? 'selected' : null}>${item.toUpperCase()}</option>`)

function setIdiom(event) {
    if (event) {
        window.localStorage.setItem('idiom', event.target.value)
        window.location.reload()
    }

    return window.localStorage.getItem('idiom')
}

// darkmode hehehe

var dark = eval(window.localStorage.getItem('darkmode')) ? darkMode() : 0;

function changeTitle(place) {

    const setting = {
        theme: {
            'pt-br': 'Mudar de cor ne'
        },
    }

    document.getElementById('title').innerText = setting[place][idiom]
}

function darkMode() {

    if (dark) { dark = 0 } else { dark = 1 }

    window.localStorage.setItem('darkmode', dark)

    if (dark) {
        document.getElementById('darkmodeBtn').innerText    = 'Darkmode 🌚'
        document.body.style.background                      = theme.dark.bg
        document.body.style.color                           = theme.dark.primary_text
        document.body.querySelector("a").style.color        = theme.dark.link
    } else {
        document.getElementById('darkmodeBtn').innerText    = 'Darkmode 🌞'
        document.body.style.background                      = theme.light.bg
        document.body.style.color                           = theme.light.primary_text
        document.body.querySelector("a").style.color        = theme.light.link
    }

    return dark
}

// using the readme provided on my repo :)

const data = fetch(`https://raw.githubusercontent.com/LpxsBr/minepage/main/src/lang/${idiom}.md`) // i was use fetch api to get the data of "raw" github content
data
    .then((res) => res.text())
    .then(data => {
        document.getElementById('readme').innerHTML = marked(data)
        console.log((res.data));
    })
    .catch((err) => console.log(err))


const ageArea = document.getElementById('age-of-devolopment');

const date = new Date();

(function(){
    ageArea.innerHTML = date.getFullYear - 2021
})()
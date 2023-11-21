
    // Idiom
    
    var idiom = window.localStorage.getItem('idiom') ? setIdiom() : 'pt-br'
    const selectDoc = document.getElementById('select')

    let options = [
        'pt-br', 'en', 'es', 'ja'
    ]

    let idiomOption = 'pt-br'

    if(window.localStorage.getItem('idiom')){
        console.log('nntrou');
        idiomOption = window.localStorage.getItem('idiom')
    }

    selectDoc.innerHTML = options.map((item)=>`<option value="${item}" ${idiom == item ? 'selected': null}>${item.toUpperCase()}</option>`)

    function setIdiom(event){
        if(event){
            window.localStorage.setItem('idiom', event.target.value)
            window.location.reload()
        }
        
        return window.localStorage.getItem('idiom')
    }

    // darkmode hehehe

    var dark = eval(window.localStorage.getItem('darkmode')) ? darkMode() : 0;

    function changeTitle(place){

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
            document.getElementById('darkmodeBtn').innerText = 'Darkmode 🌚'
            document.body.style.background = '#1E1E1E'
            document.body.style.color = '#fff'
            document.body.querySelector("a").style.color = '#fff'
            document.body.querySelector("a").style.color = '#fff'
        } else {
            document.getElementById('darkmodeBtn').innerText = 'Darkmode 🌞'
            document.body.style.background = '#fff'
            document.body.style.color = '#000'
            document.body.querySelector("a").style.color = '#000'
            document.body.querySelector("a").style.color = '#000'
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
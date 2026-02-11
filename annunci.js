// API: chiavi che ci permettono di raggiungere un .json online

// fetch(): chiamata asincrona che ci permette di collegarci ad un json e da esso estrarne il dato sotto forma di Promise.
// .than(): permette di convertire la Promise nel dato strutturale e di poterlo utilizzare come tale su javaScript

// 1. fetch()= collego al json e ne otengo una Promise
// 2. .then()= converto la Promise in un dato strutturale js
// 3. .then()= utilizzare il dato ottenuto

// .json(): metodo delle Promise che mi permette di convertirla in oggetto JS



fetch('./annunci.json').then((response) => response.json()).then((data) => {
    console.log(data);

    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');

    function radioCreate() {
        let categories = data.map((annuncio) => annuncio.category);
        console.log(categories);

        // let uniqueCategories = [];

        // categories.forEach( (category)=> {
        //     if(!uniqueCategories.includes(category)){
        //         uniqueCategories.push(category)
        //     }
        // });

        // Set(): mClasse che mi restituisce, partendo da un array, un nuovo oggetto di tipo Set il quale contiene solo valori univoci
        //Array.from(): mi permette di convertire un array-like in un array

        let uniqueCategories = Array.from(new Set(categories));
        console.log(uniqueCategories);

        uniqueCategories.forEach((category) => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
             <input class="form-check-input" type="radio" name="categories" id="${category}">
             <label class="form-check-label" for="${category}">
                ${category}
             </label>
             `;
             radioWrapper.appendChild(div);
        })


    }

    radioCreate();

    function truncateWord(string){
        if(string.length > 8){
            return string.split(' ')[0] + '...';
        } else {
            return string;
        }

    }

    function showCards(){
        data.forEach( (annuncio)=> {
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                <p class="h2">${truncateWord(annuncio.name)}</p>
                <p class="h4">${annuncio.category}</p>
                <p class="h5">${annuncio.price} €</p>
            `;
            cardWrapper.appendChild(div);
        } )
    }

    showCards();

})
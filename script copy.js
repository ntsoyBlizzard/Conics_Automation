const title = document.getElementById('title');
const image = document.getElementById('comic');
const comicsList = document.getElementById('comics-list');
let  currentPage;
let lastPage = 1;
currentPage = lastPage;

//fetching page
//https://warm-falls-08282.herokuapp.com - workaround CORS
let loadComic = (comicNumber = "") => {                      //loadComic, comicNumber
    let url = comicNumber =="" ? `https://warm-falls-08282.herokuapp.com/https://xkcd.com/info.0.json` :  `https://warm-falls-08282.herokuapp.com/https://xkcd.com/${comicNumber}/info.0.json`;
    fetch(url, { 
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Origin': 'google.com',
            'x-requested-with': "XMLHttpRequest"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            let d_title = data.safe_title;
            let d_image = data.img;
            title.innerText = d_title;
            image.setAttribute('src', d_image);
            lastPage = lastPage > data.num ? lastPage : data.num;
            console.log(`loadComic function ${lastPage} lastPage`);
        });
}

// updatePage()


//func to populate titles for dropdown menu
let listOfComics = (page) => {
    loadComic();
    for(let i=1; i<=page; i++) {
        comicsList.innerHTML+= `<option value="${i}">Comic ${i}</option>`
        console.log(`listOfComics function ${lastPage} lastPage`);
    }
}

//event listeners
document.getElementById('first').addEventListener('click', () => {
    currentPage = 1;
    loadComic(currentPage);
});

document.getElementById('next').addEventListener('click', () => {
       if (currentPage < lastPage) {
        currentPage +=1;
        loadComic(currentPage);
       }
}
);
//Question: Why function does't work without making a call within another function as above
// document.getElementById('next').addEventListener('click', loadComic(page));

document.getElementById('previous').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage -= 1;
            loadComic(currentPage);
            //console.log(page);
        }        
    });

document.getElementById('last').addEventListener('click', () => {
    currentPage = lastPage;
        loadComic(currentPage);
    }
);

document.getElementById('random').addEventListener('click', () => {
    currentPage = Math.floor(Math.random() * lastPage);
    loadComic(currentPage);
});

comicsList.addEventListener('change', (selected) => {
    loadComic(selected.target.value);
})

const latestComic = loadComic();
updatePage(latestComic);
generateComicList(latestComic);

listOfComics(lastPage);

console.log('Global');

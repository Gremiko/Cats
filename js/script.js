const nameCats = [
    'Кот с усами',
    'Кошка с колпаком',
    'Кот с тыквой',
    'Кошка-балерина'
]


const imageCats = [
    'https://gremiko.github.io/Cats/img/01.png',
    'https://gremiko.github.io/Cats/img/02.png',
    'https://gremiko.github.io/Cats/img/03.png',
    'https://gremiko.github.io/Cats/img/04.png',
]

for (let i = 0; i < nameCats.length; i++ ) {
    const dataNameCats = document.createTextNode(nameCats[i]);
    const textCats = document.getElementById(`name-cat-${i+1}`);
    textCats.appendChild(dataNameCats)
}

const imagePaths = document.querySelectorAll('.thumb img');

for (let i = 0; i < imagePaths.length; i++ ) {
imagePaths[i].src = imageCats[i];
imagePaths[i].alt = nameCats[i];


}

const catsType = [
    'Гладкошерстный',
    'Гладкошерстная',
    'Гладкошерстный',
    'Гладкошерстная',
]
for (let i = 0; i < catsType.length; i++ ) {
    const dataNameCats1 = document.createTextNode(catsType[i]);
    const textCats1 = document.getElementById(`cat-type-${i+1}`);
    textCats1.appendChild(dataNameCats1)
}

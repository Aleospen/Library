let Name = document.getElementById("name");
let Author = document.getElementById("author");
let Pages = document.getElementById("pages");
let Title = document.getElementById("title");

let numbs = 0;
console.log(numbs);

let myLibrary = [];


function Book(Name, Author, Pages, Title) {
    this.Name = Name.value;
    this.Author = Author.value;
    this.Pages = Pages.value;
    this.Title = Title.value;
    
}

function check() {
    console.log(Name.value);
    console.log(Author.value);
    console.log(Pages.value);
    console.log(Title.value);
}

function addBookToLibrary() {

    newBook = new Book(Name, Author, Pages, Title);    
    myLibrary.push(newBook);

    console.log(newBook);
    console.log(myLibrary);
    console.log(myLibrary[0]);
    
}

function displayBook () {
     let DataChest = document.getElementById("DataChest")
    let first_div = document.createElement('div')
    first_div.classList.add('BookBlock')
    DataChest.appendChild(first_div)


    let divSecundus = document.createElement('div');
    divSecundus.setAttribute = "id";
    // divSecundus.id = "point";
    divSecundus.classList.add('point')
    first_div.appendChild(divSecundus)
    // divSecundus


    numbs2 = numbs;
    console.log(numbs);



    let imgRead =  document.createElement('img')
    imgRead.classList.add('img_read')
    imgRead.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_212516.png&f=1&nofb=1";
    let points = document.getElementsByClassName('point')
    points[numbs2].appendChild(imgRead) 



        //let div3 = document.createElement('div');
        //div3.classList.add('imgDIV')
        
        //let imageOfDIVIII = document.createElement('imgDIV');
        let imageOfDIVIII = document.createElement('img');
        imageOfDIVIII.classList.add('imgLogo');
        imageOfDIVIII.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8LPxqTvPFvkgPax6lRcYPwHaKe%26pid%3DApi&f=1'
        
        //let block3 = document.getElementsByClassName('imgDIV')
        //block3[numbs2].appendChild(imageOfDIVIII);
        points[numbs2].appendChild(imageOfDIVIII)   

    

    console.log(numbs);
 
    numbs = numbs+1;

    console.log(numbs);
}

console.log(numbs);

// const container = document.createElement('div');
// container.classList.add("DataChest")    
   
/*

    const BookContainer = document.createElement('div');
    BookContainer.classList.add("BookBlock")


    let = imgLogo = document.createElement('img')
    imgLogo.src("imgLogo");

    BookContainer.appendChild(imgLogo);


    let Description = document.createElement('div');
    imgLogo.classList.add("Text");

    BookContainer.appendChild(Description);
    */


    // let divIII = document.createElement('div');
    // divIII.classList.add('img')
    // divIII.id = 'point2'

    // document.getElementById('point2').appendChild(imageOfLogo)
    // imageOfLogo.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1466nnw0ex81e.cloudfront.net%2Fn_iv%2F600%2F1175319.jpg&f=1&nofb=1'

    // console.log('message from disBook')
let Name = document.getElementById("name");
let Author = document.getElementById("author");
 let Pages = document.getElementById("pages");
let Title = document.getElementById("title");

let nameBook = Name.value
let AuthorValueInput = Author.value;
let PagesValueInput = Pages.value 

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

    console.log(numbs);


    let imgRead = document.createElement('img')
    imgRead.classList.add('img_read')
    imgRead.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_212516.png&f=1&nofb=1";
    let points = document.getElementsByClassName('point')
    points[numbs].appendChild(imgRead) 

    

        //let div3 = document.createElement('div');
        //div3.classList.add('imgDIV')
                                                                                        // COVER
        //let imageOfDIVIII = document.createElement('imgDIV');

        let coverSRC = Title.value
        console.log(coverSRC);


        let cover = document.createElement('img');
        cover.classList.add('imgLogo');
        cover.src = coverSRC
       
        
        points[numbs].appendChild(cover)   



                                                                        // Name of Book
        // let NameBlock = document.createElement('div')    // 1                                                           
         let stringName = document.createElement('p');
         stringName.classList.add('Name')   
          

         //  stringName.insertAdjacentText('Book');
        //    document.getElementsByClassName('Name').innerHTML = 'text'
         
        let nameVAR = document.createTextNode(nameBook);

        document.getElementsByClassName('Name').innerHTML = nameVAR;    

        
        points[numbs].appendChild(nameVAR)  


        let stringVoid = document.createElement('p');  

        stringVoid.classList.add('Void') 

        let textVal = document.createTextNode('     ');

        document.getElementsByClassName('Void').innerHTML = '        ';    
   
        points[numbs].appendChild(textVal)




        // Author
         let stringAuthor = document.createElement('p');
         stringName.classList.add('Author')  
        
         let AuthorVAR = document.createTextNode(AuthorValueInput);

         document.getElementsByClassName('Author').innerHTML = AuthorVAR;    
         
         points[numbs].appendChild(AuthorVAR)
 

         let Void = document.createElement('p');  

        stringVoid.classList.add('Void') 

        let text = document.createTextNode('     ');

        document.getElementsByClassName('Void').innerHTML = '    ';    
   
        points[numbs].appendChild(text)


          

        // Pages
        let stringPages = document.createElement('p');
        
        stringPages.classList.add('Pages')  
  
        let PagesVAR = document.createTextNode(PagesValueInput);

        document.getElementsByClassName('Pages').innerHTML = PagesVAR;    
   
        points[numbs].appendChild(PagesVAR)

        

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

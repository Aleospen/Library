let Name = document.getElementById("name");
let Author = document.getElementById("author");
let Pages = document.getElementById("pages");
let Title = document.getElementById("title");



// let nameBook = Name.value
// let AuthorValueInput = Author.value;
// let PagesValueInput = Pages.value 


let myLibrary = []
let numbs = 0; // Counter




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
    

     //if (Name.value != null & undefined & Author.value != null & undefined & Pages.value != null & undefined & Title.value != null & undefined) {
        if (Name.value != undefined & Author.value != undefined & Pages.value != undefined & Title.value != null && 'undefined') {
    
    console.log(Name.value);
    console.log(Author.value);
    console.log(Pages.value);
    console.log(Title.value);
    
    
    // console.log(AuthorValueInput)
    // console.log(PagesValueInput)
    
    addBookToLibrary(); 
    
    displayBook(myLibrary)

      } else {
        alert('Not enough data')
    }
    
    
}



function addBookToLibrary() {
    
   let newBook = new Book(Name, Author, Pages, Title);    
    console.log('test' + newBook.Title)
    myLibrary.push(newBook);
    console.log('test ml' + myLibrary[numbs].Title);
    console.log('new book ' + newBook);
    console.log('Library ' + myLibrary);
    console.log(myLibrary[numbs]);    
}



function displayBook (myLibrary) {
     let DataChest = document.getElementById("DataChest")
    let first_div = document.createElement('div')
    first_div.classList.add('BookBlock')
    DataChest.appendChild(first_div)


    let divSecundus = document.createElement('div');
    divSecundus.setAttribute = "id";
    divSecundus.classList.add('point')
    first_div.appendChild(divSecundus)
   


    let imgRead = document.createElement('img')
    imgRead.classList.add('img_read')
    imgRead.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_212516.png&f=1&nofb=1";
    let points = document.getElementsByClassName('point')
    points[numbs].appendChild(imgRead) 
 
                                                                                        // COVER
        

       // let coverSRC = Title.value
       // let coverSRC = newBook.Title

       let coverSRC = Title.value
        let cover = document.createElement('img');
        cover.classList.add('imgLogo');
        cover.src = coverSRC

        points[numbs].appendChild(cover)   
                                                                                        

                                                                        // Name of Book                                                         
         let stringName = document.createElement('p');
         stringName.classList.add('Name')   
          
         
        let nameVAR = document.createTextNode(Name.value);

        document.getElementsByClassName('Name').innerHTML = nameVAR;    

        
        points[numbs].appendChild(nameVAR)  


            
        let stringVoid = document.createElement('p');  
        stringVoid.classList.add('Void') 
        let textVal = document.createTextNode(' ');
        document.getElementsByClassName('Void').innerHTML = ' ';    
        stringVoid[numbs].appendChild(textVal)
            


                                                                        // Author
         let stringAuthor = document.createElement('p');
         stringName.classList.add('Author')     
         let AuthorVAR = document.createTextNode(Author.value);
         document.getElementsByClassName('Author').innerHTML = AuthorVAR;    
         stringAuthor[numbs].appendChild(AuthorVAR)
                                                                        


        // delete later 2
         let Void = document.createElement('p');  
        stringVoid.classList.add('Void') 
        let text = document.createTextNode(' ');
        document.getElementsByClassName('Void').innerHTML = ' ';    
        Void[numbs].appendChild(text)
         

                                                                        // Pages
        let stringPages = document.createElement('p');
        stringPages.classList.add('Pages')  
        let PagesVAR = document.createTextNode(Pages.value);
        document.getElementsByClassName('Pages').innerHTML = PagesVAR;    
        stringPages[numbs].appendChild(PagesVAR)
                                                                    
 
    numbs = numbs + 1;

    
}




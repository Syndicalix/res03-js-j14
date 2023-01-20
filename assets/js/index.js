import { User } from './classes/User.js';  
import { Book } from "./classes/Book.js";  
  
window.addEventListener("DOMContentLoaded", function(){  

    let users = [];
    let books = [];
    
    let user1 = new User(1, "Mari", "mari@mari.com", "bgdu35xXx", "Mari", "DOUCET");
    let user2 = new User(2, "Adrien", "adrien@adrien.com", "roxxor35xXx", "Adrien", "adrien");
    let user3 = new User(3, "Marie", "marie@marie.com", "hola35", "Marie", "marie");
    
    let book1 = new Book(1, "ElMatador", "eux", "publicationDate", 35, "ertrhyhjtgyhyrjtfygh", "coverImage");
    let book2 = new Book(2, "ElToroFuerte", "lui", "publicationDate", 69, "fdgfhgvhbny,nfsdecfvgbh", "coverImage");
    let book3 = new Book(3, "LaSenora", "elle", "publicationDate", 30, ",hfgvbhn,jkhgcegfgh", "coverImage");
    
    users.push(user1);
    users.push(user2);
    users.push(user3);
    
    books.push(book1);
    books.push(book2);
    books.push(book3);
    

    
    let jsonUsers = JSON.stringify(users);
    let jsonBooks = JSON.stringify(books);
    
sessionStorage.setItem("userStored", jsonUsers);
sessionStorage.setItem("bookStored", jsonBooks);

let userNewArray = sessionStorage.getItem("userStored");

 for (let i = 0; i > users.length; i++)
{
    console.log(users)
}

let bookNewArray = sessionStorage.getItem("bookStored");

 for (let i = 0; i > books.length; i++)
{
    console.log(books)
}

console.log(userNewArray)
console.log(bookNewArray)
    
});


const API_URL = "https://anapioficeandfire.com/api/books/1"


function fetchBooks() {
    fetch(API_URL)
    .then((res) => {
        if(!res.ok) {
            throw new Error("Cannot Fetch Data")
        }
        return res.json();
        
    })
    .then((data) => {
        console.log(data.data);
        const books = data.data
            .map(book => {
                return `
                <div class="details">
                    <p>Authors: ${book.authors}</p>
                    <p>isbn: ${book.isbn}</p>
                    <p>Numberofpages:${book.numberOfPages}</p>
                    <p>Publisher: ${book.publisher}</p>
                    <p>ReleasedDate: ${book.released}</p>
                </div>
                `;
            }).join("");
            console.log(books);
        document.querySelector("app").insertAdjacentHTML("afterbegin", books)
    })
    .catch((err) => {
        console.error(err);
        const error = document.getElementById("error");
        error.innerText = err;
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 3000);
    })
}


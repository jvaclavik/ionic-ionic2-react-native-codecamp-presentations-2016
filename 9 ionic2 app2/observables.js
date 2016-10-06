this.http.get('/app/books.json')
.map((res) => res.json())
.subscribe(
    data => {
        this.books = data
    },
    err => console.error(err),
    () => console.log('done')
);

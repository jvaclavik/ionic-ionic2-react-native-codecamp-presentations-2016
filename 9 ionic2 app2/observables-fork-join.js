Observable.forkJoin(
    this.http.get('/app/books.json')
        .map((res) => res.json()),
    this.http.get('/app/movies.json')
        .map((res) => res.json())
).subscribe(
    data => {
        this.books = data[0]
        this.movies = data[1]
    },
    err => console.error(err),
    () => console.log('done')
);

$resource("http://movies.com/api/movies").query();


$resource(
  "http://movies.com/api/movies/:movieId",
  {movieId: "@movieId"}
).get({movieId: 6});


$resource(
  "http://movies.com/api/movies/:movieId/rating",
  {movieId: "@movieId"}
).save(
  {movieId: 6},
  body
);


$resource(
  "http://movies.com/api/movies/:movieId",
  {movieId: "@movieId"
}, {
  update: {method: "PUT"}
}).update(
  {movieId: 6},
  body
);


$resource(
  "http://movies.com/api/movies/:movieId",
  {movieId: "@movieId"}
).delete({movieId: 6});

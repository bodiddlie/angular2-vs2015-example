using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TypescriptNG2.Controllers
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }
    }

    [RoutePrefix("api/movies")]
    public class MovieController : ApiController
    {
        private static List<Movie> movies = new List<Movie>
        {
            new Movie { ID = 1, Title = "Star Wars: The Force Awakens" },
            new Movie { ID = 2, Title = "Star Trek: Beyond" },
            new Movie { ID = 3, Title = "Mad Max: Fury Road" },
            new Movie { ID = 4, Title = "Sicario" },
            new Movie { ID = 5, Title = "Iron Man" }
        };

        [Route("")]
        public IList<Movie> GetListOfMovies()
        {
            return movies;
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult AddMovie(Movie movieToAdd)
        {
            movieToAdd.ID = movies[movies.Count - 1].ID + 1;
            movies.Add(movieToAdd);
            return CreatedAtRoute("DefaultApi", new { controller = "Movie", ID = movieToAdd.ID }, movieToAdd);
        }

        [Route("{id:int}")]
        public IHttpActionResult GetMovie(int id)
        {
            var movie = movies.Find(m => m.ID == id);

            if (movie == null)
                return NotFound();

            return Ok(movie);
        }

        [Route("{id:int}")]
        [HttpPut]
        public IHttpActionResult EditMovie(Movie vm)
        {
            var movie = movies.Find(m => m.ID == vm.ID);

            if (movie == null)
                return NotFound();

            movie.Title = vm.Title;

            return Ok(vm);
        }

        [Route("{id:int}")]
        [HttpDelete]
        public IHttpActionResult DeleteMovie(int id)
        {
            var movie = movies.Find(m => m.ID == id);

            if (movie == null)
                return NotFound();

            movies.Remove(movie);

            return Ok();
        }
    }
}

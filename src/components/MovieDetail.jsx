/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=521a20c5bce3412f60de5507e048c525`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <h1 className="text-white font-bold">{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
        alt={movie.title} 
        className="w-full h-auto object-cover"
      />
      <p className="text-white">{movie.overview}</p>
      
    </div>
  );
}

export default MovieDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=521a20c5bce3412f60de5507e048c525`);
        setMovie(movieResponse.data);

        // Fetch movie credits
        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=521a20c5bce3412f60de5507e048c525`);
        setCredits(creditsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details or credits:", error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Error loading movie details.</div>;
  }

  return (
    <div className="movie-detail p-8 bg-gray-900 text-white flex flex-col md:flex-row items-start gap-8">
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt={movie.title} 
        className="w-full md:w-1/3 lg:w-1/4 h-auto object-cover"
      />
      <div className="flex flex-col gap-4 w-full md:w-2/3 lg:w-3/4">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-lg italic">{movie.tagline}</p>
        <div className="flex gap-4">
          <div>
            <h2 className="font-bold">Language</h2>
            <p>{movie.original_language}</p>
          </div>
          <div>
            <h2 className="font-bold">First Air</h2>
            <p>{movie.release_date}</p>
          </div>
          <div>
            <h2 className="font-bold">Last Air</h2>
            <p>{movie.last_air_date || 'N/A'}</p>
          </div>
          <div>
            <h2 className="font-bold">Status</h2>
            <p>{movie.status}</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Genres</h2>
          <div className="flex gap-2">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="bg-gray-700 rounded-full px-2 py-1 text-sm">{genre.name}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold">Synopsis</h2>
          <p>{movie.overview}</p>
        </div>
        <div>
          <h2 className="font-bold">Casts</h2>
          <div className="flex gap-2">
            {credits && credits.cast.slice(0, 5).map((castMember) => (
              <span key={castMember.cast_id} className="bg-gray-700 rounded-full px-2 py-1 text-sm">{castMember.name}</span>
            ))}
          </div>
        </div>
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Website</a>
      </div>
    </div>
  );
}

export default MovieDetail;


import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=521a20c5bce3412f60de5507e048c525`);
        setMovie(movieResponse.data);

        // Fetch movie credits
        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=521a20c5bce3412f60de5507e048c525`);
        setCredits(creditsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details or credits:", error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-white">Error loading movie details.</div>;
  }

  return (
    <div className="p-8 bg-gray-900 text-white">
      <button
        onClick={() => history.goBack()}
        className="bg-red-600 text-white py-2 px-4 rounded mb-4"
      >
        Go Back
      </button>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full md:w-1/3 lg:w-1/4 h-auto object-cover"
        />
        <div className="flex flex-col gap-4 w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-lg italic">{movie.tagline}</p>
          <div className="flex items-center gap-2 text-2xl">
            <span className="font-bold">{movie.vote_average}</span>
            <span className="text-yellow-500">★</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <h2 className="font-bold">Language</h2>
              <p>{movie.original_language}</p>
            </div>
            <div>
              <h2 className="font-bold">First Air</h2>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <h2 className="font-bold">Last Air</h2>
              <p>{movie.last_air_date || 'N/A'}</p>
            </div>
            <div>
              <h2 className="font-bold">Status</h2>
              <p>{movie.status}</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="bg-gray-700 rounded-full px-2 py-1 text-sm">{genre.name}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold">Synopsis</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h2 className="font-bold">Casts</h2>
            <div className="flex flex-wrap gap-2">
              {credits && credits.cast.slice(0, 10).map((castMember) => (
                <span key={castMember.cast_id} className="bg-gray-700 rounded-full px-2 py-1 text-sm">{castMember.name}</span>
              ))}
            </div>
          </div>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

*/
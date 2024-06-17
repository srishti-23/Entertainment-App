/*import React from "react";
import { LuSearch } from "react-icons/lu";


// SearchBar component
const SearchBar = () => {
    // Getting current location
    

    return (
        // Search form container with styling
        <form
        onSubmit={submitHandler} className="w-full ml-4 mt-4 h-14 bg-[#161D2F] z-50 flex gap-3 justify-center items-center font-light text-HeadingXS lg:justify-evenly lg:text-HeadingM px-2 lg:py-5 lg:gap-0 rounded-lg"
        >
            
            <LuSearch className="text-xl lg:text-3xl " />

            
            <input
                value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }}
                type="text"
                name="searchQuery"
                id="search"
        
                placeholder="Search Movies..."
                className="w-[95%] text-2xl bg-[#161D2F] text-gray-500 h-fit caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] placeholder-text-wrap"
            />
        </form>
    );
};

export default SearchBar;*/



/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LuSearch } from 'react-icons/lu';
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import Row from '../components/Row';

const SearchBar = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading);
    const { movieName, searchedMovie }  = useSelector((store) => store.searchMovie);
    

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
            console.log(res.data.results);
            const movies = res?.data?.results;
            
           dispatch(setSearchMovieDetails({ searchMovie, movies }));
            console.log(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
        setSearchMovie('');
    };

    return (
        <>
            <div className="flex justify-center w-full">
                <form
                    onSubmit={submitHandler}
                    className="w-full ml-4 mt-4 h-14 bg-[#161D2F] z-50 flex gap-3 justify-center items-center font-light text-HeadingXS lg:justify-evenly lg:text-HeadingM px-2 lg:py-5 lg:gap-0 rounded-lg"
                >
                    <LuSearch className="text-xl lg:text-3xl" />
                    <input
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                        type="text"
                        placeholder="Search Movies..."
                        className="w-[95%] text-2xl bg-[#161D2F] text-gray-500 h-fit caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] placeholder-text-wrap"
                    />
                </form>
            </div>
            
            <Row title={movieName} fetchURL={searchedMovie} />
        </>
    );
};

export default SearchBar;*/


/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LuSearch } from 'react-icons/lu';
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchBar = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading);
    const { movieName, searchedMovie }  = useSelector((store) => store.searchMovie);
    
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
            console.log(res.data.results);
            const movies = res?.data?.results;
            
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
            console.log(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
        setSearchMovie('');
    };

    return (
        <>
            <div className="flex justify-center w-full">
                <form
                    onSubmit={submitHandler}
                    className="w-full ml-4 mt-4 h-14 bg-[#161D2F] z-50 flex gap-3 justify-center items-center font-light text-HeadingXS lg:justify-evenly lg:text-HeadingM px-2 lg:py-5 lg:gap-0 rounded-lg"
                >
                    <LuSearch className="text-xl lg:text-3xl" />
                    <input
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                        type="text"
                        placeholder="Search Movies..."
                        className="w-[95%] text-2xl bg-[#161D2F] text-gray-500 h-fit caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] placeholder-text-wrap"
                    />
                </form>
            </div>
            
            {isLoading ? (
                <div className="flex justify-center mt-4 text-lg">Loading...</div>
            ) : searchedMovie && searchedMovie.length > 0 ? (
                <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>
            ) : (
                <div className="flex justify-center mt-4 text-lg">Movie Not Found!!</div>
            )}
        </>
    );
};

export default SearchBar;*/

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LuSearch } from 'react-icons/lu';
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchBar = ({ setSearchActive }) => {
    const [searchMovie, setSearchMovie] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading);
    const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        setSearchActive(true);
        try {
            const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
            const movies = res?.data?.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
        setSearchMovie('');
    };

    return (
        <>
            <div className="flex justify-center w-full">
                <form
                    onSubmit={submitHandler}
                    className="w-full ml-4 mt-4 h-14 bg-[#161D2F] z-50 flex gap-3 justify-center items-center font-light text-HeadingXS lg:justify-evenly lg:text-HeadingM px-2 lg:py-5 lg:gap-0 rounded-lg"
                >
                    <LuSearch className="text-xl lg:text-3xl" />
                    <input
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                        type="text"
                        placeholder="Search Movies..."
                        className="w-[95%] text-2xl bg-[#161D2F] text-gray-500 h-fit caret-darkRed focus:outline-none border-b-2 border-transparent focus:border-waikawaGrey lg:w-[94%] placeholder-text-wrap"
                    />
                </form>
            </div>
            
            {isLoading ? (
                <div className="flex justify-center mt-4 text-lg">Loading...</div>
            ) : searchedMovie && searchedMovie.length > 0 ? (
                
                <>
                    <div className="flex justify-center mt-4 text-lg text-white">Results for "{movieName}"</div>
                    <MovieList title={movieName} searchMovie={true} movies={searchedMovie} />
                </>
            ) : (
                <div className="flex justify-center mt-4 text-lg">Movie Not Found!!</div>
            )}
        </>
    );
};

export default SearchBar;


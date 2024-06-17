import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
    const { searchQuery } = useParams(); // Extract the search query from the URL
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/search?query=${encodeURIComponent(searchQuery)}');
                setResults(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [searchQuery]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Search Results for "{decodeURIComponent(searchQuery)}"</h1>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        {result.title} - {result.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
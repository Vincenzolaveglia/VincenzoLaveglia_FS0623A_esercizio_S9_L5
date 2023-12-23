import React, { useState } from "react";


const SearchBook = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleKeyPress = async (event) => {
        if (event.key === "Enter") {
            const newQuery = event.target.value;

            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${newQuery}`
                );
                const data = await response.json();

                if (data.items) {
                    setResults(data.items);
                } else {
                    setResults([]);
                }
            } catch (error) {
                console.error("Errore durante la ricerca dei libri:", error);
            }

            setQuery(newQuery);
        }
    };
    return (
<div>
    <input type="text" onKeyPress={handleKeyPress} placeholder="Che film cerchi?" className="bg-dark p-2 text-white" />

    <div className="p-3">
        {results.length > 0 && (
            <h2 className="text-white">In base alla tua ricerca:</h2>
        )}
        <div className="row">
            {results.slice(0, 4).map((result) => (
                <div key={result.id} className="col-6 col-sm-3 mb-3">
                    <img src={result.volumeInfo.imageLinks?.thumbnail} alt="film cercato" className="img-fluid w-100 hover-expand"
                    />
                </div>
            ))}
        </div>
    </div>
</div>
    );

};

export default SearchBook;

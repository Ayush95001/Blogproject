import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Blogdata } from './Blogdata';
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  const results = Blogdata.filter(item => 
    item.title.toLowerCase().includes(query)
  );

  return (
    <div>
      <h2 style={{marginTop:"5%"}}>Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        results.map(result => (
          <div key={result.id} >
            <img  src={result.thumbnail} alt={result.title} />
            <h3 >{result.title}</h3>
            <p >{result.description}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
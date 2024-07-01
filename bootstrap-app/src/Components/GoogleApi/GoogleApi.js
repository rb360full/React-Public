import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyA6ntSJjcf9Uu5w0-7MBft63mD1HTGeqc4';
const CX = '658dacb77c9c045d9';

const GoogleApiComponent = () => {
  const [query, setQuery] = useState('');
  const [link, setLink] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          key: API_KEY,
          cx: CX,
          q: query,
        },
      });

      if (res.data.items && res.data.items.length > 0) {
        const firstResult = res.data.items[0];
        setLink(firstResult.link);
        console.log('Title:', firstResult.title);
        console.log('Link:', firstResult.link);
      } else {
        console.log('No search results found');
      }
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search query"
      />
      <button onClick={handleSearch}>Search</button>
      {link && (
        <div>
          <p>First result link:</p>
          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
      )}
    </div>
  );
};

export default GoogleApiComponent;

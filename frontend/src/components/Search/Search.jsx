import { useState } from 'react'
import './Search.css'
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch(`http://localhost:3001/search?q=${query}`);
        if (!response.ok) {
          throw new Error('Fout bij het ophalen van de gegevens');
        }
        const data = await response.json();
  
        setSearchResults(data);
      } catch (error) {
        console.error('Er is een fout opgetreden bij het uitvoeren van de zoekopdracht.', error);
      }
    };

    return (
        <div className='search'>
          
            <form onSubmit={handleSearch}>
            <h1>Klant zoeken</h1>
                <p>Zoek en verifieer de klant.</p>
                <div className='bar'>
                  <input 
                      type="text" 
                      placeholder="Postcode + huisnummer of klantnummer"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                  />
                  <button type="submit">
                      <img src="../../images/search.png" alt="Search" />
                  </button>
                </div>  

                <ul className='results'>
                <h3>Resultaten:</h3>
                {searchResults.map((result, index) => (
                    <li key={index} >
                      <FontAwesomeIcon icon={faUser} />
                      <Link to={`/customer/${result.id}`}>{result.name}</Link>
                    </li>
                ))}
            </ul>
           
            </form> 
            
            
            
        </div>
    )
}

export default Search;

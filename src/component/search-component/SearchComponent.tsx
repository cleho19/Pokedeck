import React, { Component } from 'react';
import './SearchComponent.scss'

export class SearchComponent extends Component {
  render() {
    return(
        <header className="search-container">

            <input className="search-text" type="text" name="searchPokemon"/>
        </header>
    )
  }
}
<body>
  <script>
    function searchPokemon(id:num) {
      fetch('https://pokeapi.co/api/v2/pokemon/${id}')
      then(function ( response ) {
        response.json()
        .then(function (pokemon) ) {
          
        }
      }
    }
  </script>
</body>
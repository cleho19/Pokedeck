import React from 'react';
import './App.scss';
import {SearchComponent} from './component/search-component/SearchComponent';
import {CardsComponent} from './component/cards-component/CardsComponent';
const App: React.FC = () => {
  return (
    <div className="App">
    <SearchComponent/>
    <CardsComponent/>
    </div>
  );
}

export default App;

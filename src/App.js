

import {useState} from 'react';
import AnimalShow from './AnimalShow';
import searchImages from './api';
import './App.css';
import SearchBar from './components/SearchBar';



function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}


function App() {

    const [animals, setAnimals] = useState([]);
    const handleClick = () => {

        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    const handleSubmit = (term) => {
        console.log("do  a search with ", term);
        searchImages(term);
    }

    return <div className='app'>

        <div className='animal-app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>
                {renderedAnimals}
            </div>
        </div>

        <div>
            <SearchBar onSubmit = {handleSubmit} />
        </div>
        
    </div>;
}

export default App;
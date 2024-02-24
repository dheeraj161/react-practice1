

import {useState} from 'react';
import AnimalShow from './AnimalShow';
import searchImages from './api';
import './App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';




function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}


function App() {

    const [animals, setAnimals] = useState([]);
    const [images, setImages] = useState([]);
    const handleClick = () => {

        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    const handleSubmit = async (term) => {
        console.log("do  a search with ", term);
        const result = await searchImages(term);
        setImages(result);
    }

    return <div className='app'>

        <div className='animal-app'>
            <button onClick={handleClick}>Add Animals</button>
            <div className='animal-list'>
                {renderedAnimals}
            </div>
        </div>

        <div>
            <SearchBar onSubmit = {handleSubmit} />
            <ImageList images={images} />
        </div>
        
    </div>;
}

export default App;
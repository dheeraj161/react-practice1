import { useState } from "react";

function SearchBar({onSubmit}) {
    const handleClick=()=>{
        onSubmit("cars");
    };

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("i need to tell the parent about some data");
        onSubmit(term);
    }

    const handleChange = (event) => {

        console.log(event.target.value);
        setTerm(event.target.value.replace(/[a-z]/, ''));
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
            {term.length < 3 && 'term must be longer'}
        </form>
        
    </div>;
}

export default SearchBar;
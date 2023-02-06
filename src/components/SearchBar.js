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
        setTerm(event.target.value);
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange} />
        </form>
        
    </div>;
}

export default SearchBar;
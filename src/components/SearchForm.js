import { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
    const [inpVal, setInpVal] = useState("");
    const [searchType, setSearchType] = useState("shows");

    const handleInput = (e) => {
        setInpVal(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        handleSubmit(searchType, inpVal);
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" name="search" id="search" placeholder="Enter Movie or an Actor name" onChange={handleInput} value={inpVal} />
                <div className="radio-container">
                    <label><input type="radio" name="searchOption" value="shows" className="inp-radio" onChange={(e) => { setSearchType(e.target.value) }} checked={searchType === "shows"} />Shows</label>
                    <label><input type="radio" name="searchOption" value="actors" className="inp-radio" onChange={(e) => { setSearchType(e.target.value) }} checked={searchType === "actors"} />Actors</label>
                </div>
                <input type="submit" className="sub" value="Submit" />
            </form>
        </div>
    );
}

export default SearchForm;
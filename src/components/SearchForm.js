import './SearchForm.css'

const SearchForm = (props) =>{
    const {handleGender, handleCountry, country} = props;
    return(
        <div className='SearchForm'>
            <div className='SearchForm-field'>
                <select onChange={handleGender}>
                    <option value="">Both</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className='SearchForm-field'>
                <input type='text' placeholder='Select country code: col, us, it fr,'
                    onChange={handleCountry} value={country} />
            </div>
        </div>        
    )
}
export default SearchForm;
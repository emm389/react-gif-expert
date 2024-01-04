import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

// AddCategory.propTypes = {
//     categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//     setCategories: PropTypes.func.isRequired
// }

export default AddCategory

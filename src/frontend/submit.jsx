import React from 'react';
import App from '../App';

const TextInputForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim()) {
        onSubmit(inputValue); // Call the onSubmit prop with the input value
        setInputValue(''); // Clear the input field after submission
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Begin your own continuation here..."
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default TextInputForm;
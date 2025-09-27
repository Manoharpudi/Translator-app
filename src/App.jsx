import { useState } from 'react';
import axios from 'axios';
export default function App() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleTranslate = async () => {
    if (!inputText || !targetLanguage) {
      setError('Please enter text and select a language.');
      setTranslatedText('');
      return;
    }
    setIsLoading(true);
    setTranslatedText('');
    setError('');
    const options = {
      method: 'POST',
      url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'x-rapidapi-key': '5649f05bb8msh866a4793d4da594p1a9302jsnda58c054c37f', 
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        q: inputText,
        source: 'en',
        target: targetLanguage,
      },
    };
    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations.translatedText);
    } catch (err) {
      setError('Error: Translation failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center font-sans text-white">
      <div className="bg-black p-8 rounded-xl shadow-red-800/50 shadow-lg w-full max-w-lg border-2 border-red-700">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-red-600 uppercase tracking-wide">
          Translator 
        </h1>
        
        <textarea
          className="w-full h-32 p-4 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-500 transition-all duration-300 border border-gray-700 resize-none disabled:opacity-50"
          placeholder="Enter text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isLoading}
        ></textarea>
        <div className="flex items-center justify-between mt-4">
          <select 
            className="bg-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white border border-gray-700 transition-all duration-300 disabled:opacity-50"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            disabled={isLoading}
          >
            <option value="">Select Language</option>
            <option value="te">Telugu</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
          <button 
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg shadow-md shadow-red-500/30 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide disabled:bg-gray-500 disabled:cursor-not-allowed disabled:transform-none"
            onClick={handleTranslate}
            disabled={isLoading}
          >
            {isLoading ? 'Translating...' : 'Translate'}
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-gray-900 rounded-lg min-h-[128px] text-lg text-gray-200 border border-red-900">
          {error ? <span className="text-red-500">{error}</span> : translatedText}
        </div>
      </div>
    </div>
  );
}
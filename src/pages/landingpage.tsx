import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Howler from 'react-howler';
import landingSong from '../assets/The Twelve Days Of Christmas.mp3';

const LandingPage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [isPlaying] = useState(true);

    const handleSubmit = () => {
        if (name.trim()) {
            navigate(`/animation?name=${encodeURIComponent(name)}`);
        } else {
            alert('Please enter your name!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
            <h1 className="text-3xl text-green-700 text-center mb-4">
                Hello there, Ashaolu David sent you a Christmas card!
            </h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border-2 border-green-500 rounded w-1/5"
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
            >
                Click here to open the message
            </button>
        
            <Howler src={[landingSong]} playing={isPlaying} loop={true} volume={0.7} />
        </div>
    );
};

export default LandingPage;

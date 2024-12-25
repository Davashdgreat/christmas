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
            alert('Please enter what David calls you!');
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-[url(/bg3.jpg)] bg-cover"
        >
            <h1 className="text-5xl text-gray-100 text-center mb-4 mt-7 font-dancing">
                You have a Christmas card from Ashaolu David!
            </h1>
            <input
                type="text"
                placeholder="What does David call you?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border-2 border-green-500 rounded w-1/5 text-2xl"
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

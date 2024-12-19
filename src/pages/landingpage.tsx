import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (name.trim()) {
            navigate(`/card?name=${encodeURIComponent(name)}`);
        } else {
            alert('Please enter your name!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
            <h1 className="text-2xl text-green-700">Hello there, Ashaolu David sent you a Christmas card!</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-4 p-2 border-2 border-green-500 rounded"
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            >
                Click here to open the message
            </button>
        </div>
    );
};

export default LandingPage;

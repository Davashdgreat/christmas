import { useSearchParams } from 'react-router-dom';
import Howler from 'react-howler';
import song from '../assets/Jingle Bell Rock.mp3';

const CardPage = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') || 'Guest';

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            <h1 className="text-4xl text-red-700 text-center">
                🎄 Merry Christmas, {name}! 🎄
            </h1>
            <p className="text-xl mt-4 text-center max-w-md">
                Wishing you a joyous holiday season filled with love, happiness, and lots of laughter!
            </p>
            <img
                src="https://via.placeholder.com/300x200.png?text=Merry+Christmas!" // Replace with a festive image
                alt="Christmas"
                className="mt-6 rounded shadow-md"
            />
            <Howler src={[song]} playing={true} loop={true} volume={0.5} />
        </div>
    );
};

export default CardPage;

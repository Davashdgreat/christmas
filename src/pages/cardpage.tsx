import { useSearchParams } from 'react-router-dom';
import Howler from 'react-howler';
import song from '../assets/Jingle Bell Rock.mp3';

const CardPage = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') || 'Guest';

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url(/bg4.jpg)] bg-cover">
            <div
                className="relative bg-[url(/card.jpg)] bg-cover bg-center w-[400px] h-[700px] flex flex-col justify-center items-center p-6 shadow-lg"
            >
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
                    Merry Christmas, {name}!
                </h1>
                <p className="text-lg text-gray-700 text-center max-w-[80%]">
                    As we celebrate this season of joy and giving, may your heart be filled with peace and happiness, your home with love and laughter, and your days with countless blessings. May the coming year bring you closer to your dreams and shower you with endless opportunities and success. <br /> <br />

                    Wishing you a wonderful Christmas filled with warmth and cheer and a prosperous New Year full of hope and promise! <br /> <br />

                    With heartfelt gratitude and love, <br />

                    Ashaolu David
                </p>
            </div>
            <Howler src={[song]} playing={true} loop={true} volume={0.5} />
        </div>
    );
};

export default CardPage;

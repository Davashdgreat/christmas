import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../animations/opening-animation.json';

const AnimationPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/card?name=${encodeURIComponent(name || 'Guest')}`);
        }, 5000); // Adjust time to match animation length
        return () => clearTimeout(timer);
    }, [navigate, name]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url(/bg3.jpg)] bg-cover">
            <Player
                autoplay
                loop={false}
                src={animationData}
                style={{ height: '300px', width: '300px' }}
            />
            <p className="text-4xl font-bold text-gray-900 mt-4">Opening your Christmas card...</p>
        </div>
    );
}
export default AnimationPage;

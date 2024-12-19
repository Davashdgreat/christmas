import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import AnimationPage from './pages/animationpage';
import CardPage from './pages/cardpage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/animation" element={<AnimationPage />} />
                <Route path="/card" element={<CardPage />} />
            </Routes>
        </Router>
    );
};

export default App;

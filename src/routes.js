import Carte from 'pages/Carte';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/carte' element={<Carte />} />
            </Routes>
        </Router>
    );
}
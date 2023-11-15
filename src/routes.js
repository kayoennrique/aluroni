import Menu from 'components/Menu';
import PageDefault from 'components/PageDefault';
import Carte from 'pages/Carte';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element ={<PageDefault/>}>
                        <Route index element={<Home />} />
                        <Route path='carte' element={<Carte />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}
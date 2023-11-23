import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Carte = lazy(() => import('pages/Carte'));
const PageDefault = lazy(() => import('components/PageDefault'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Dish = lazy(() => import('pages/Dish'));
const About = lazy(() => import('pages/About'));

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path='/' element={<PageDefault />}>
                            <Route index element={<Home />} />
                            <Route path='carte' element={<Carte />} />
                            <Route path='about' element={<About />} />
                        </Route>
                        <Route path='dish/:id' element={<Dish />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    );
}
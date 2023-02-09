import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const deployedLink = 'https://admitkard-assignment-codeantik.vercel.app';
const localLink = 'http://localhost:5000';

export const config = {
    baseUrl: deployedLink
}

const App = () => {
    return (
        <div>
            <Nav />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
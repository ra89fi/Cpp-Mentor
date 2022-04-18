import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useParams,
} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import app from './firebase.init';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    if (!user)
        return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
};

const Checkout = () => {
    const params = useParams();
    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h3>You've selected Package {params.id}</h3>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/blogs" element={<Blogs></Blogs>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                <Route
                    path="/checkout/:id"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<h4>Not Found!</h4>} />
            </Routes>
        </div>
    );
}

export default App;

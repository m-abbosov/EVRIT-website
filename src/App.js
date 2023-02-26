import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </>
    );
}

export default App;

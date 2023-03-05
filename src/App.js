import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setCourses, setFaqs} from "./redux/actions";
import {Header} from "./components/Header";
import HomePage from "./pages/Home";
import {Footer} from "./components/Footer";
import {About} from "./pages/About";
import {Courses} from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
    const dispatch = useDispatch()
    const [teachers, setTeachers] = useState()
    const {courses, faqs} = useSelector((state) => state.Reducer);
    useEffect(() => {
        axios.get("https://evrit.uz/api/v1/courses/?format=json")
            .then((res) => dispatch(setCourses(res.data)))
            .catch(err => console.error(err));
        axios.get("https://evrit.uz/api/v1/faq/?format=json")
            .then(res => dispatch(setFaqs(res.data)))
        axios.get('https://evrit.uz/api/v1/teachers/?format=json')
            .then(res => setTeachers(res.data))
    }, [dispatch])

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage data={{courses: courses, teachers: teachers}}/>}/>
                <Route path="/about" element={<About data={faqs}/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

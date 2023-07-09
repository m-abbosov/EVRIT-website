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
import AOS from "aos"
import "aos/dist/aos.css"
function App() {
    const dispatch = useDispatch()
    const [teachers, setTeachers] = useState()
    const [open, setOpen] = useState(false)
    const {courses, faqs} = useSelector((state) => state.Reducer);
    useEffect(() => {
        AOS.init({duration: 1000})
        axios.get("https://api.evrit.uz/api/v1/courses/?format=json")
            .then((res) => dispatch(setCourses(res.data)))
            .catch(err => console.error(err));
        axios.get("https://api.evrit.uz/api/v1/faq/?format=json")
            .then(res => dispatch(setFaqs(res.data)))
        axios.get('https://api.evrit.uz/api/v1/teachers/?format=json')
            .then(res => setTeachers(res.data))
    }, [dispatch])

    return (
        <>
            <Header open={open} setOpen={setOpen}/>
            <div className={open ? "overlay" : ""}>
                <Routes>
                    <Route path="/" element={<HomePage data={{courses: courses, teachers: teachers}}/>}/>
                    <Route path="/about" element={<About data={faqs}/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    );
}

export default App;

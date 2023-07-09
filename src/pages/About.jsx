import React from "react";
import "../assets/styles/About.scss"
// images
import PersonLaptop from "../assets/images/man-studying-with-a-laptop 1.png"
import AboutPhoto from "../assets/images/AboutPhoto.png"
import HourGlass from "../assets/images/hourglass 1.png"
import QuestionLogo from "../assets/images/question 1.png"
import {LazyLoadImage} from "react-lazy-load-image-component";
import Accordions from "../components/Accordions";

export const About = ({data}) => {
    return (
        <main className="about">
            <div className="container">
                <section className="section-1">
                    <h2 className="section-title" data-aos="fade-right">Biz haqimizda</h2>
                    <p className="section-info" data-aos="fade-left">EVR IT akademiya jamoasi yillar davomida shakllangan tajriba asosida o‘z
                        faoliyatini boshlab, IT
                        mutaxasisslarni yetkazib bermoqda.</p>
                    {/*<img src={AboutPhoto} alt="about" className="section-1__img"/>*/}
                    <LazyLoadImage alt="about"
                                   effect="blur"
                                   src={AboutPhoto}/>
                </section>
                <section className="section-2">
                    <h2 className="section-title" data-aos="fade-right">Biz maqsadlarimiz</h2>
                    <div className="section-2__cards">
                        <div className="section-2__cards-item" data-aos="flip-right">
                            <div className="section-2__cards-item__img">
                                <img src={PersonLaptop} alt=""/>
                            </div>
                            <b>Dasturlashni o‘rganish</b>
                            <p>Dasturlash asoslarini, Python, C#, Java, PHP yoki Go tillarini o'rganasiz</p>
                        </div>
                        <div className="section-2__cards-item"  data-aos="flip-down">
                            <div className="section-2__cards-item__img">
                                <img src={HourGlass} alt=""/>
                            </div>
                            <b>Vaqtingizni tejash</b>
                            <p>Jahon standartlariga mos keluvchi o‘quv dasturlarimiz sizning vaqtingiz va naqdingizni
                                tejaydi.</p>
                        </div>
                        <div className="section-2__cards-item"  data-aos="flip-left">
                            <div className="section-2__cards-item__img">
                                <img src={QuestionLogo} alt=""/>
                            </div>
                            <b>24/7 qo‘llab-quvvatlash</b>
                            <p>Kursni muvaffaqiyatli tugatib, yirik kompaniyalarda yuqori daromad topishingizgacha
                                yordam berish.</p>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <h2 className="section-title" data-aos="fade-right">Ko’p beriladigan savollarga javoblar:</h2>
                    <Accordions questions={data}/>
                </section>
            </div>
        </main>
    )
}
import React from "react";
import "../assets/styles/Courses.scss"

// images
import CalendarIcon from "../assets/images/Calendar.svg"
import BookIcon from "../assets/images/BookCourse.svg"
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useSelector} from "react-redux";

export const Courses = ({data}) => {
    const {courses} = useSelector((state) => state.Reducer);
    return (
        <main className="courses-wrapper">
            <div className="container">
                <h2 className="section-title" data-aos="fade-right">Kurslarmiz</h2>
                <p className="section-info" data-aos='fade-left'>EVR IT akademiya jamoasi yillar davomida shakllangan tajriba asosida o‘z
                    faoliyatini boshlab, IT
                    mutaxasisslarni yetkazib bermoqda.</p>
                <ul className="courses">
                    {
                        courses?.map((item, index) => {
                            return (
                                <li className="courses__item" key={Math.random()} id={"course-" + item.id}>
                                    <LazyLoadImage effect="blur" src={item.image} alt="course-img"
                                                   wrapperClassName="courses__item-img"/>
                                    <div className="courses__item-content">
                                        <div className="courses__item-content__top">
                                            <b>{item.price} so’m</b>
                                            <p>Oylik to’lov</p>
                                        </div>
                                        <h4>{item.name}</h4>
                                        <p className="courses__item-content__info">{item.description}</p>
                                        <div className="courses__item-content__bottom">
                                            <div className="courses__item-content__bottom-box">
                                                <img src={CalendarIcon} alt=""/>
                                                <p>{item.months}-oy</p>
                                            </div>
                                            <div className="courses__item-content__bottom-box">
                                                <img src={BookIcon} alt=""/>
                                                <p>{item.lessons}-ta dars</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )
}
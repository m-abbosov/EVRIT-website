import React, {Component} from "react";
import Slider from "react-slick";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/CoursesCarousel.scss"
// images
import CalendarIcon from "../assets/images/Calendar.svg"
import BookIcon from "../assets/images/BookCourse.svg"
import ArrowWhite from "../assets/images/arrowWhite.svg";
import ArrowBlue from "../assets/images/arrowBlue.svg"

export default class CoursesCarousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            activeSlide: 0,
        };
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    changeSlide(_, nextSlide) {
        this.setState({activeSlide: nextSlide});
    }

    handleNavigate(id) {
        window.location.href = `/courses#course-${id}`
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            autoplaySpeed: 2000,
            nextArrow: null, // Next arrow ni null qilamiz
            prevArrow: null,
            beforeChange: (current, next) => this.changeSlide(current, next),
        };
        return (
            <div className="courses-list">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                    {
                        this.props.data?.map((item, index) => {
                            return (
                                <div className="courses-list__item" onClick={() => this.handleNavigate(item.id)}
                                     key={index + 1}>
                                    {/*<img src={item.img} className="courses-list__item-img" alt=""/>*/}
                                    <LazyLoadImage alt={item.title}
                                                   effect="blur"
                                                   src={item.image}/>
                                    <div className="courses-list__item-content">
                                        <b className="courses-list__item-price">{item.price} so'm</b>
                                        <p className="courses-list__item-title">{item.name}</p>
                                        <div className="courses-list__item-bottom">
                                            <div className="duration">
                                                <img src={CalendarIcon} alt=""/>
                                                <p>{item.months} oy</p>
                                            </div>

                                            <div className="numberOfLessons">
                                                <img src={BookIcon} alt=""/>
                                                <p>{item.lessons} ta dars</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
                {
                    this.props.data.length > 3 && (
                        <div className="buttons-wrapper">
                            <button
                                className={this.state.activeSlide === 0 ? 'button disabled' : "button rotate"}
                                disabled={this.state.activeSlide === 0 && true}
                                onClick={this.previous}
                            >
                                <img src={this.state.activeSlide === 0 ? ArrowBlue : ArrowWhite} className="arrow-left"
                                     alt=""/>
                            </button>
                            <button
                                className={this.state.activeSlide === this.props.data.length - 3 ? 'button disabled rotate' : "button "}
                                disabled={this.state.activeSlide === this.props.data.length - 3 && true}
                                onClick={this.next}
                            >
                                <img src={this.state.activeSlide === this.props.data.length - 3 ? ArrowBlue : ArrowWhite}
                                     alt=""/>
                            </button>
                        </div>
                    )
                }

            </div>
        );
    }
}

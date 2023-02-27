import React, {Component} from "react";
import Slider from "react-slick";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/TeachersCarousel.scss"
// images
import ArrowWhite from "../assets/images/arrowWhite.svg";
import ArrowBlue from "../assets/images/arrowBlue.svg"

export default class TeachersCarousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            activeSlide: 0,
            margin: false
        };
    }

    next() {
        this.slider.slickNext();
        this.setState({margin: !this.state.margin})
    }

    previous() {
        this.slider.slickPrev();
        this.setState({margin: !this.state.margin})
    }

    changeSlide(_, nextSlide) {
        this.setState({activeSlide: nextSlide});
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: null,
            prevArrow: null,
            beforeChange: (current, next) => this.changeSlide(current, next),
        };

        return (
            <div className="teachers-list">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                    {
                        this.props.data?.map((item, index) => {
                            return (
                                <div
                                    className={this.state.margin ? (index + 1) % 2 === 0 ? "teachers-list__item margin" : "teachers-list__item" : (index + 1) % 2 === 1 ? "teachers-list__item margin" : "teachers-list__item"}
                                    key={index + 1}>
                                    <LazyLoadImage alt={item.title}
                                                   effect="blur"
                                                   src={item.image}/>
                                    <div className="teachers-list__item-info">
                                        <b>{item.name}</b>
                                        <p>{item.postion}</p>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>

                {
                    this.props.data.length > 4 && (
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
                                className={this.state.activeSlide === this.props.data.length - 4 ? 'button disabled rotate' : "button "}
                                disabled={this.state.activeSlide === this.props.data.length - 4 && true}
                                onClick={this.next}
                            >
                                <img src={this.state.activeSlide === this.props.data.length - 4 ? ArrowBlue : ArrowWhite}
                                     alt=""/>
                            </button>
                        </div>
                    )
                }

            </div>
        );
    }
}

import React from "react";
import "../assets/styles/Home.scss"
import Button from "../components/Button";
// images
import MainImg from "../assets/images/Illustration 1.svg"
import MainImg2 from "../assets/images/main2-img.svg"
import UserIcon from "../assets/images/user.svg"
import UsersIcon from "../assets/images/users.svg"
import BookIcon from "../assets/images/book.svg"

const HomePage = () => {
    return (
        <main className="home-page">
            <div className="container">
                <section className="section-1">
                    <div className="section-1__left">
                        <h1>Kelajak shu yerdan boshlanadi.</h1>
                        <p>
                            EVR IT akademiya jamoasi yillar davomida shakllangan tajriba
                            asosida o‘z faoliyatini boshlab, IT mutaxasisslarni yetkazib
                            bermoqda.
                        </p>
                        <Button text="Ro’yhatdan o’tish"/>
                    </div>
                    <div className="section-1__right">
                        <img src={MainImg} alt="main-img" className="section-1__right-img"/>
                    </div>
                </section>
                <section className="section-2">
                    <div className="section-2__contents">
                        <div className="section-2__contents-item">
                            <div className="section-2__contents-item__left">
                                <img src={UserIcon} alt=""/>
                            </div>
                            <div className="section-2__contents-item__right">
                                <b>6+</b>
                                <p>O’qtuvchilar</p>
                            </div>
                        </div>
                        <div className="section-2__contents-item">
                            <div className="section-2__contents-item__left">
                                <img src={UsersIcon} alt=""/>
                            </div>
                            <div className="section-2__contents-item__right">
                                <b>15+</b>
                                <p>Kurslar soni</p>
                            </div>
                        </div>
                        <div className="section-2__contents-item">
                            <div className="section-2__contents-item__left">
                                <img src={BookIcon} alt=""/>
                            </div>
                            <div className="section-2__contents-item__right">
                                <b>1000+</b>
                                <p>O’quvchilar</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-2__back"></div>
                </section>
                <section className="section-3">
                    <div className="section-3__left">
                        <img src={MainImg2} alt="main-img"/>
                    </div>
                    <div className="section-3__right">
                        <h2 className="section-title">
                            Biz haqimizda
                        </h2>
                        <p>
                            Biz – EVR IT akademiyasimiz! Akademiyamizda tajribali
                            IT sohasida yuqori marralarni qo‘lga kiritgan o‘qituvchilarimiz
                            tomonidan chuqur va puxta bilim beriladi.
                        </p>
                    </div>
                </section>

                <section className="section-4">
                    <h2 className="section-title">Kurslar</h2>

                </section>
            </div>
        </main>
    );
};

export default HomePage;

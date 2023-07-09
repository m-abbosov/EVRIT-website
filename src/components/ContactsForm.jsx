import React, {useState} from "react";
import axios from "axios";
import {useAlert} from "react-alert";
import ArrowTop from "../assets/images/ArrowTop.svg";

export const ContactsForm = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const alert = useAlert()

    const handlePhoneChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        // setPhoneSpan(9 - value.length)
        let validPhoneNum = `${value.slice(-9, -7)} ${value.slice(-7, -4)} ${value.slice(-4)}`;
        setPhone(validPhoneNum);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === "") {
            alert.show("Ism kiritlmadi!");
        }
        if (phone.trim() === '') {
            alert.show("Nomer kiritlmadi!")
        }
        axios.post('https://api.evrit.uz/api/v1/contact/', {
            name: name,
            number: Number(phone.split(" ").join(""))
        })
            .then((res) => {
                if (res.data) {
                    alert.success("Xabar yuborildi!")
                    setName("")
                    setPhone("")
                }
            })
    }
    return (
        <div className="form__content" data-aos="fade-up">
            <h3>Biz bilan yuqori marralarga erishing!</h3>
            <p>Batafsil ma'lumot olish uchun ismingiz va raqamingizni qoldiring!</p>
            <form className="form" onSubmit={handleSubmit}>
                <input className="form-input" onChange={(e) => setName(e.target.value)} value={name} type="text"
                       placeholder="Ism"/>
                <div className="form-wrapper">
                    <span>+998 </span>
                    <input type="tel"
                           id="phone"
                           name="phone"
                           value={phone}
                           onChange={handlePhoneChange}
                    />
                </div>
                <button className="form-btn" type="submit">
                    <span>Yuborish</span>
                    <img src={ArrowTop} alt=""/>
                </button>
            </form>
        </div>
    )
}
import React from "react";
import {ContactsForm} from "../components/ContactsForm";
import "../assets/styles/Contact.scss"

const Contact = () => {

    return (
        <main className="contact-wrapper">
            <div className="container">
                <section className="section-1">
                    <h2 className="section-title">Biz bilan bog‘lanish uchun</h2>
                    <p className="section-info">EVR IT akademiya jamoasi yillar davomida shakllangan tajriba asosida o‘z
                        faoliyatini boshlab, IT
                        mutaxasisslarni yetkazib bermoqda.</p>

                    <ContactsForm/>
                </section>
                <section className="section-2">
                    <h2 className="section-title">Manzilimiz</h2>
                    <iframe
                        title="Evr It Academy"
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2999.9999041087076!2d69.253819!3d41.24356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzM2LjgiTiA2OcKwMTUnMTMuOCJF!5e0!3m2!1sen!2s!4v1677657611655!5m2!1sen!2s"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </div>
        </main>
    )
}

export default Contact;
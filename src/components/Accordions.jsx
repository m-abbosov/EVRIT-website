import React, {useState} from "react";
import "../assets/styles/Accordions.scss"
import MinusIcon from "../assets/images/minus-icon.svg"
import PlusIcon from "../assets/images/plus-icon.svg"

const Accordions = ({questions}) => {
    const [active, setActive] = useState(null)

    const Accordion = ({question, index}) => {
        const handleClick = (index) => {
            if (index === active) {
                setActive(null)
            } else {
                setActive(index)

            }
        }
        return (
            <div className={active === index ? "accordion active" : "accordion"} onClick={() => handleClick(index)}>
                <div className="accordion-heading">
                    <b>{index + 1}. {question.question}</b>
                    <img src={active === index ? MinusIcon : PlusIcon} alt=""/>
                </div>
                <div className="accordion-answer">
                    <p>{question.answer}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="accordions">
            {
                questions.map((item, index) => {
                    return <Accordion question={item} index={index} key={item.id}/>
                })
            }
        </div>
    )
}

export default Accordions;
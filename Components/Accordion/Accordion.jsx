import accordionStyle from "./Accordion.module.css"
import useAccordion from "../../Hooks/Accordion"
import PropTypes from "prop-types"

const list = [
    {
        question: "Qustion 1",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe rerum quibusdam ullam magnam ipsam eligendi officia minus laboriosam temporibus!",
    },
    {
        question: "Qustion 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe rerum quibusdam ullam magnam ipsam eligendi officia minus laboriosam temporibus!",
    },
    {
        question: "Qustion 3",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe rerum quibusdam ullam magnam ipsam eligendi officia minus laboriosam temporibus!",
    },
    {
        question: "Qustion 4",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe rerum quibusdam ullam magnam ipsam eligendi officia minus laboriosam temporibus!",
    },
];

const symbolButtons = {
    openSymbol: "+",
    closeSymbol: "-"
};

export default function Accordion({ accordionList = list, symbols = symbolButtons, id, userAccordionStyle, userAccordionBoxStyle, userAccordionTitleStyle, userAccordionQuesStyle, userAccordionSignStyle, userAccordionContentShowStyle, userAccordionContentHideStyle }) {

    const [openAccordion, toggle] = useAccordion(null);

    return (
        <section className={`${userAccordionStyle}`} id={id}>
            {
                accordionList.map((data, id) => {
                    return (
                        <div key={id} className={`${accordionStyle.accordionBox} ${userAccordionBoxStyle}`}>
                            <div className={`${accordionStyle.accordionTitle} ${userAccordionTitleStyle}`}
                                onClick={() => toggle(id)} >
                                <span className={`${accordionStyle.accordionQues} ${userAccordionQuesStyle}`}>{data.question}</span>
                                <span className={`${accordionStyle.accordionSign} ${userAccordionSignStyle}`}>{openAccordion == id ? symbols.closeSymbol : symbols.openSymbol}</span>
                            </div>
                            <div className={openAccordion == id ? `${accordionStyle.accordionContentHide} ${accordionStyle.accordionContentShow} ${userAccordionContentShowStyle}` : `${accordionStyle.accordionContentHide} ${userAccordionContentHideStyle}`}>{data.answer}</div>
                        </div>
                    )
                })
            }
        </section>
    )
}

Accordion.propTypes = {
    accordionList: PropTypes.arrayOf(PropTypes.shape({
        question: PropTypes.node,
        answer: PropTypes.node
    })),
    symbols: PropTypes.shape({
        openSymbol: PropTypes.string,
        closeSymbol: PropTypes.string
    }),
    id: PropTypes.string,
    userAccordionStyle: PropTypes.string,
    userAccordionBoxStyle: PropTypes.string,
    userAccordionTitleStyle: PropTypes.string,
    userAccordionQuesStyle: PropTypes.string,
    userAccordionSignStyle: PropTypes.string,
    userAccordionContentShowStyle: PropTypes.string,
    userAccordionContentHideStyle: PropTypes.string
};
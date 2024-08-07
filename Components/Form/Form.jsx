import formStyle from "./Form.module.css"
import PropTypes from "prop-types"

const fieldsData = {
    inputTag: [
        {
            inputType: "text",
            inputId: "name",
            inputName: "name",
            inputLabel: "Name",
            required: true
        },
        {
            inputType: "email",
            inputId: "email",
            inputName: "email",
            inputLabel: "Email",
            required: true
        },
        {
            inputType: "number",
            inputId: "phoneNo",
            inputName: "phoneNo",
            inputLabel: "Contact Number",
            required: true
        }
    ],
    textareaTag: [
        {
            textareaId: "message",
            textareaName: "message",
            textareaLabel: "Message",
            required: true
        }
    ]
};


export default function Form({ fields = fieldsData, formTitle = "Leave a Comment", id, updateData, submit, submitted, userFormCardStyle, userTitleStyle, userFormStyle, userInputFieldStyle, userSubmittedStyle, userSubmittedSVGstyle }) {


    return (
        <div className={`${formStyle.formCard} ${userFormCardStyle}`} id={id}>
            <span className={`${formStyle.title} ${userTitleStyle}`}>{formTitle}</span>

            <form className={`${formStyle.form} ${userFormStyle}`} onSubmit={submit}>

                {
                    fields.inputTag.map((field, id) => {
                        return (
                            <div className={`${formStyle.group} ${userInputFieldStyle}`} key={id}>
                                <input placeholder="" type={field.inputType} name={field.inputName} id={field.inputId} required={field.required === true} onChange={updateData} />
                                <label htmlFor={field.inputId}>{field.inputLabel}</label>
                            </div>
                        )
                    })
                }

                {
                    fields.textareaTag.map((textarea, id) => {
                        return (
                            <div className={`${formStyle.group} ${userInputFieldStyle}`} key={id}>
                                <textarea placeholder="" id={textarea.textareaId} name={textarea.textareaName} required={textarea.required === true} onChange={updateData}></textarea>
                                <label htmlFor={textarea.textareaId}>{textarea.textareaLabel}</label>
                            </div>
                        )
                    })
                }

                <button type="submit">Submit</button>
            </form>

            {
                submitted &&
                <div className={`${formStyle.submitted} ${userSubmittedStyle}`}>
                    <svg className={`${formStyle.submittedSVG} ${userSubmittedSVGstyle}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                        <path fill="#98ccfd" d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"></path><path fill="none" stroke="#4788c7" strokeMiterlimit="10" d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"></path><path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" d="M11,20l6,6l13-13"></path>
                    </svg>
                </div>
            }
        </div>
    )
}

Form.propTypes = {
    fields: PropTypes.shape({
        inputTag: PropTypes.arrayOf(PropTypes.shape({
            inputType: PropTypes.string,
            inputId: PropTypes.string,
            inputName: PropTypes.string,
            inputLabel: PropTypes.string,
            required: PropTypes.bool
        })),
        textareaTag: PropTypes.arrayOf(PropTypes.shape({
            textareaId: PropTypes.string,
            textareaName: PropTypes.string,
            textareaLabel: PropTypes.string,
            required: PropTypes.bool
        }))
    }),
    formTitle: PropTypes.string,
    id: PropTypes.string,
    userFormCardStyle: PropTypes.string,
    userTitleStyle: PropTypes.string,
    userFormStyle: PropTypes.string,
    userInputFieldStyle: PropTypes.string,
    userSubmittedStyle: PropTypes.string,
    userSubmittedSVGstyle: PropTypes.string
};
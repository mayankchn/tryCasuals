import FormikHOC from "../HOCs/FormikHOC"

const FancyInput = ({id,type,label,name,autoComplete,placeholder,className,value,error,touched,onChange,onBlur}) => {
    return (
        <>
            <label htmlFor={id} className="sr-only">{label}: </label>
                    <input
                        id={id}
                        type={type}
                        name={name}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={" indent-2 px-3 py-2 border-2 rounded-lg outline-2 outline-primary-500 "+className}
                    />
                    {touched && error && <div className="text-primary-500 font-sm font-semibold">{error}</div>}
        </>
    )
}
export const FormikFancyInput = FormikHOC(FancyInput)
export default FancyInput
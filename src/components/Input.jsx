import { useField } from "formik"

const Input = ({id,type,label,name,autoComplete,placeholder,className}) => {
    const [field,meta]=useField(name)
    return (

    //  <>Hello</>

        <>
            <label htmlFor={id} className="sr-only">{label}: </label>
                    <input
                        id={id}
                        type={type}
                        name={name}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        className={"indent-2 px-3 py-2 border rounded-lg outline-2 outline-primary-500 "+className}
                    />
                    {meta.touched && meta.error && <div className="text-primary-500 font-sm font-semibold">{meta.error}</div>}
        </>
    )
}
export default Input
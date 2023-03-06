import { useField } from "formik"

const FormikHOC = (IncomingComp) => {
    function OutgoingComp({ id, type, label, name, autoComplete, placeholder, className }) {
        const [field, meta] = useField(name)
        return (
            <IncomingComp
                id={id}
                label={label}
                type={type}
                name={name}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={"indent-2 px-3 py-2 border rounded-lg outline-2 outline-primary-500 " + className}
                touched={meta.touched}
                error={meta.error}
            />
        );
    }
    return OutgoingComp;
}
export default FormikHOC
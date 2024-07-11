// import { FieldAttributes, FieldHelperProps, useField } from "formik";
// import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
// import Select, { ActionMeta } from 'react-select';
import { useMemo } from "react";
import styles from "./input-field.module.scss";

type Props = {
    name: string;
    label: string;
    required: boolean;
    [key: string]: any;
};

type InputFieldProps = Props;

export function InputField(props: InputFieldProps) {
    const { name, label, required, ...restOfProps } = props;

    const labelText = useMemo(() => {
        return required ? `${label}*` : label;
    }, [label, required]);

    return (
        <div className="form-control">
            <label htmlFor={name} className={styles.label}>
                {labelText}
            </label>
            <input
                className={styles['input-field']}
                id={name}
                name={name}
                type="text"
            // onChange={formik.handleChange}
            // value={formik.values.email}
            />
        </div>
    );
};



// type InputFieldProps = Props;

// export function InputField(props: InputFieldProps) {
//     const { name, label, required, ...restOfProps } = props;
//     const [field, meta] = useField(name);

//     return (
//         <div className="form-control">
//             <label htmlFor={name}>
//                 {label} {required ? "*" : ""}
//             </label>
//             <input {...field} {...restOfProps} id={name} />
//             {meta.error && meta.touched && (<small className="error">{meta.error}</small>)}
//         </div>
//     );
// };

// type CheckBoxProps = Props;
// export const Checkbox = (props: CheckBoxProps) => {
//     const { name, label, ...restOfProps } = props;
//     const [field, meta, helpers] = useField(name);

//     return (
//         <div className="form-control">
//             <label className="checkbox-option">
//                 <input type="checkbox" {...restOfProps} {...field} />
//                 {label}
//             </label>
//             {meta.touched && meta.error && (
//                 <small className="error">{meta.error}</small>
//             )}
//         </div>
//     );
// };
// type SelectDropdownProps = Props & {
//     onChange?: (option: SelectOption | null) => SelectOption;
//     options: SelectOption[];
// };
// export function SelectDropdown(props: SelectDropdownProps) {
//     const { name, label, required, options, onChange, ...restOfProps } = props;
//     const [field, meta] = useField(name);

//     return (
//         <div className="form-control">
//             <label htmlFor={name}>
//                 {label} {required ? "*" : ""}
//             </label>
//             <SelectField
//                 name={name}
//                 label={label}
//                 required={required}
//                 options={options}
//                 onChange={onChange}
//             />
//             {meta.error && meta.touched && (
//                 <small className="error">{meta.error}</small>
//             )}
//         </div>
//     );
// };

export type SelectOption = { value: string; label: string };
// type SelectFieldProps = Props & {
//     options: SelectOption[];
//     onChange?: (option: SelectOption | null) => SelectOption;
// };

// function SelectField(props: SelectFieldProps) {
//     const { options, onChange, ...restOfProps } = props;

//     const onHandleChange = useCallback((option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
//         // form.setValue(option ? option.value : "", field.name);
//         if (onChange) {
//             onChange(option);
//         }
//     }, [onChange, options]);

//     return (
//         <Select
//             options={options}
//             onChange={onHandleChange}
//         />
//     );
// };

import { ErrorMessage, Field } from "formik";

type SelectProps = {
  label: string;
  name: string;
  options: { value: number; label: string }[];
};

const FormikSelect = (props: SelectProps) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field as="select" name={props.name} className="form-select">
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name}>
        {(message) => <p className="text-danger">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default FormikSelect;
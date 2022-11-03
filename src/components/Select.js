import ReactSelect, { components } from "react-select";
import clsx from "clsx";

const Control = ({ isInvalid, ...props }) => {
  const DefaultControl = components.Control;
  return (
    <DefaultControl
      {...props}
      className={clsx("form-control", { "is-invalid": isInvalid })}
    />
  );
};
export function Select({
  options,
  name,
  onChange,
  value,
  isLoading,
  isInvalid = false,
  ...props
}) {
  return (
    <ReactSelect
      options={options}
      isLoading={isLoading}
      closeMenuOnSelect={true}
      onChange={onChange}
      value={value}
      name={name}
      className={clsx("select-form-control", { "is-invalid": isInvalid })}
      {...props}
      components={{
        Control: (props) => <Control isInvalid={isInvalid} {...props} />
      }}
    />
  );
}

import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && <FormInputLabel shrink={false}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;

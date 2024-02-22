import PropTypes from "prop-types";
import { Input, Label } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        title="Enter contact to find"
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

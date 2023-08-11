const FormRow = ({ type, name, handleChange, labelText, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={type} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="form-input"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;

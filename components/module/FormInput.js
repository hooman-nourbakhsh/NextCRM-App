function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default FormInput;

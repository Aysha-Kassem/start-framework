import { useState } from "react";

const FloatingInput = ({ label, type, name }) => {
  const [value, setValue] = useState("");

  return (
    <div className="floating-group">
      <input
        type={type}
        name={name}
        placeholder={label}
        className="form-control floating-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label className={value ? "active" : ""}>{label}</label>
    </div>
  );
};

export default FloatingInput;

import React from "react";

function Input({ className, name, handleInputChange, value, handleSubmit }) {
  return (
    <form className={className} onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="50"
        name={name}
        placeholder="What are you thinking about?"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">
        <i className="material-icons">send</i>
      </button>
    </form>
  );
}

export default Input;

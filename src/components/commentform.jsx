import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed !== "") {
      onAddComment(trimmed); // Envía el comentario al padre (Post)
      setInputValue(""); // Limpia el campo
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Escribe un comentario..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Comentar
      </button>
    </form>
  );
};

export default CommentForm;

import React from "react";

const ListComments = ({ comments }) => {
  return (
    <div className="mt-3">
      <h6 className="text-muted">Comentarios</h6>
      {comments.length === 0 ? (
        <p className="text-muted">Sin comentarios aún.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              🗨️ {comment.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListComments;

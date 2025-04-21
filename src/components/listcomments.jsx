import React, { useState } from "react";

const ListComments = ({ comments, onReply, onLike }) => {
  const [replyText, setReplyText] = useState({});

  const handleInputChange = (id, value) => {
    setReplyText({ ...replyText, [id]: value });
  };

  const handleReplySubmit = (id) => {
    if (replyText[id]?.trim()) {
      onReply(id, replyText[id]);
      setReplyText({ ...replyText, [id]: "" });
    }
  };

  return (
    <div className="mt-3">
      <h6 className="text-muted">Comentarios</h6>
      {comments.length === 0 ? (
        <p className="text-muted">Sin comentarios aún.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              <strong>🗨️ {comment.text}</strong>
              <div className="d-flex gap-2 mt-1">
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => onLike(comment.id)}
                >
                  👍 {comment.likes}
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleReplySubmit(comment.id)}
                >
                  ↩️ Responder
                </button>
              </div>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Escribe una respuesta..."
                value={replyText[comment.id] || ""}
                onChange={(e) => handleInputChange(comment.id, e.target.value)}
              />
              {/* Mostrar respuestas */}
              {comment.replies.length > 0 && (
                <ul className="list-group mt-2">
                  {comment.replies.map((reply) => (
                    <li key={reply.id} className="list-group-item small">
                      ↪️ {reply.text}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListComments;

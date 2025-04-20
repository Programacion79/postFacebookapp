import React from 'react';

let post = () => {
    return (
      <div>
        <div className="container my-3">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* Header del post */}
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="Usuario"
                  className="rounded-circle me-3"
                  width="48"
                  height="48"
                />
                <div>
                  <div className="fw-bold">Carlos Mendoza</div>
                  <div className="text-muted" style={{ fontSize: "0.875rem" }}>
                    Hace 3 horas · 🌐
                  </div>
                </div>
              </div>

              {/* Texto del post */}
              <p className="card-text">
                Hoy fue un día increíble en el parque nacional. ¡La naturaleza
                es realmente maravillosa!
              </p>

              {/* Imagen del post */}
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Paisaje"
                className="img-fluid rounded mb-3"
              />

              {/* Reacciones */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center px-3 py-2">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: "1.2rem" }}>👍 ❤️ 😆</span>
                    <span className="ms-2 text-muted">123</span>
                  </div>
                  <div className="text-muted">🗨️ 2 mil comentarios</div>
                </li>

                {/* Botones de acción */}
                <li className="list-group-item d-flex justify-content-around px-2 py-1 border-top">
                  <button className="btn btn-light w-100 me-2">
                    👍 Me gusta
                  </button>
                  <button className="btn btn-light w-100 me-2">
                    💬 Comentar
                  </button>
                  <button className="btn btn-light w-100">↪️ Compartir</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default post;
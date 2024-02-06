import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '@/components/Header';

function TeamsChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Aquí podrías cargar los mensajes del usuario seleccionado
    // desde la base de datos o cualquier otra fuente de datos
  };

  const handleMessageSend = (message) => {
    // Aquí podrías enviar el mensaje a la base de datos o a través de una API
    // y luego actualizar los mensajes del usuario en el estado
    setMessages([...messages, message]);
  };

  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header />
      </div>
      <div className="container-md mt-5 pt-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 bg-light">
            <h4 className="mt-3 mb-4">Erabiltzaileak</h4>
            <div className="list-group">
              <a href="#" className={`list-group-item list-group-item-action py-2 ${selectedUser === 'Usuario 1' ? 'active' : ''}`} onClick={() => handleUserClick('Usuario 1')}>
                Usuario 1
              </a>
              <a href="#" className={`list-group-item list-group-item-action py-2 ${selectedUser === 'Usuario 2' ? 'active' : ''}`} onClick={() => handleUserClick('Usuario 2')}>
                Usuario 2
              </a>
              <a href="#" className={`list-group-item list-group-item-action py-2 ${selectedUser === 'Usuario 3' ? 'active' : ''}`} onClick={() => handleUserClick('Usuario 3')}>
                Usuario 3
              </a>
              {/* Agrega más usuarios según sea necesario */}
            </div>
          </div>

          {/* Chat */}
          <div className="col-md-8 border-left">
            <h4 className="mt-3 mb-4">Chat</h4>
            <div className="messages">
              {/* Aquí se mostrarán los mensajes */}
              {selectedUser && (
                <div className="message">Chat con {selectedUser}</div>
              )}
              {/* Muestra los mensajes del usuario seleccionado */}
              {messages.map((message, index) => (
                <div key={index} className="message">{message}</div>
              ))}
            </div>
            {selectedUser && (
              <div className="input-group mt-3">
                <input type="text" className="form-control shadow border-0 border-bottom me-2" placeholder="Mezu bat idatzi..." onFocus={(e) => e.target.classList.add('border-success')} onBlur={(e) => e.target.classList.remove('border-success')} />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => handleMessageSend('Mensaje de prueba')}>Enviar</button>
                </div>
              </div>

            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default TeamsChatPage;

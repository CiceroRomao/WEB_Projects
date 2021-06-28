import React from "react";
import { useState } from "react";
import './Style.css'

export const Form = ({onSubmit}) => {
    const [placa, setPlaca] = useState('');
    const [detalhe, setdetalhe] = useState('');
    const [url, setUrl] = useState('');
  
    
    async function handleSubmit(e) {
      e.preventDefault();
  
      await onSubmit({
        placa,
        detalhe,
        url,
      });
  
      setPlaca('');
      setdetalhe('');
      setUrl('');
    }
  
    return (
      <div className="form-component">
        <h1>Criar Multa</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="placa">Placa:</label>
            <input
              required
              type="text"
              name="placa"
              id="placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="detalhe">Detalhe:</label>
            <input
              required
              type="text"
              name="detalhe"
              id="detalhe"
              value={detalhe}
              maxLength="32"
              onChange={(e) => setdetalhe(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="url">Url:</label>
            <input
              required
              type="text"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button className="botcad" type="submit">Cadastrar Viagem</button>
        </form>
      </div>
    );
  }
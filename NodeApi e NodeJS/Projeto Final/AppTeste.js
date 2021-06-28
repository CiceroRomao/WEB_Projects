import Header from './componentes/Header'
import api from './services/api'
import React, {useState, useEffect} from "react";
import {Form} from './componentes/Form'
import './componentes/Style.css'

export default function App(){
    const [multas, setMultas] = useState([]);
    
    
    useEffect(async () => {
        const  respost = await api.get('');
        const data = await respost.data;

        setMultas(data);
    }, []);

    async function handleAdd(data){
        const placa = data.placa;
        const detalhe = data.detalhe;
        const url = data.url;

        const info = {placa,detalhe,url}
        const response = await api.post('', info)
        
        setMultas([...multas, response.data]);
    }

    function credit(){
        alert("Componentes: \n Nome:Cícero Romão Ribeiro Pereira Filho \n Matricula: 411674 \n Nome:Joao victor costa de lima \n Matricula: 404304 \n Nome:Francisca Liliane da Silva \n Matricula: 391217");
    }


    async function handleDellMult (id) {
        if(window.confirm('quer mesmo deletar?')){
            const trecochato = await api.delete(`/${id}`);
            setMultas([...multas,trecochato.data])
        }
    }

    return (
            <ul>
                <Header/>
                <div className='teste'></div>
                <div className='divG'>
                    <div className='testeTilti'>
                        <h1>Lista de Multas:</h1>
                    </div>
                    {multas.map(mult =>(
                        <p key={mult.id} className='funcs'>
                            <div className="multasstyle">
                                <li>Id da multa: {mult._id}<p/></li>
                                <li>Placa do Vaículo: {mult.placa}<p/></li>
                                <li>Detalhes: {mult.detalhe}<p/></li>
                                <li>Url: {mult.url}<p/></li>
                                {mult.favorite && <span>(Teste)</span>}
                                <button className="botdel" onClick={() => handleDellMult(mult._id)}>Deletar Multa</button>
                            </div>
                        </p> ))}
                        <div className="tituloCad">
                            <h1>Cadastrar Multas:</h1>
                        </div>
                        <div className="style-form">
                            <Form onSubmit={handleAdd}/>
                        </div>
                </div>
            <footer className="footer">
                <button className="botobt" onClick={() => credit()}>Créditos</button>
            </footer>
            </ul>
    );
}

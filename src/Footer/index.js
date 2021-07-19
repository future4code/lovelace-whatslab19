import React from 'react'
import { ContainerFooter } from './style'

export class Footer extends React.Component {

    state = {
        usuario: "",
        mensagem: "",
    };

    changeUsuario = (event) => {
        this.setState({
            usuario: event.target.value
        });
    };

    changeMensagem = (event) => {
        this.setState({
            mensagem: event.target.value
        });
    };

    tela = () => {
        
        this.props.show(this.state.mensagem , this.state.usuario)
    }

    render() {
        return (
            <ContainerFooter>
                <input
                    placeholder={"Usuário"}
                    value={this.state.usuario}
                    onChange={this.changeUsuario}
                />
                <input
                    placeholder={"Mensagem"}
                    value={this.state.mensagem}
                    onChange={this.changeMensagem}
                />
                <button onClick={this.tela}>Enviar</button>
            </ContainerFooter>
        )
    }
}

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
        
        this.setState({mensagem:"", usuario:""})
    }

    render() {
        return (

            <ContainerFooter>
                <input id="usuario"
                    placeholder={"Usuário"}
                    value={this.state.usuario}
                    onChange={this.changeUsuario}
                />
                <input id="mensagem"
                    placeholder={"Mensagem"}
                    value={this.state.mensagem}
                    onChange={this.changeMensagem}
                />

                <button disabled={!this.state.usuario && !this.state.mensagem} onClick={this.tela}> Enviar </button>

            </ContainerFooter>
        )
    }
}

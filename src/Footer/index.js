import React from 'react'
import { Container } from './style'

export class Footer extends React.Component {

    state = {
        usuario: "",
        mensagem: "",
    };

    render() {
        return (
            <Container>
                <input
                    placeholder={"Usuário"}
                    value={this.state.usuario}
                    // onChange={}
                />
                <input
                    placeholder={"Mensagem"}
                    value={this.state.mensagem}
                    // onChange={}
                />
                <button>Enviar</button>
            </Container>

        )
    }
}

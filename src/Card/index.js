import React from 'react'
import { Footer } from '../Footer'
import { Container, Titulo } from './style'

export class Card extends React.Component {

    state = {
        mensagens: []
    }

    show = (mensagem, usuario) => {
        this.setState({ mensagens: [...this.state.mensagens, { mensagem, usuario }] })

        this.setState({})

    }

    render() {
        return (
            <Container>
                <Titulo>WhatsLab</Titulo>

                {this.state.mensagens.map((mensagem, index) => {
                    return (

                        <div id="MensagemContainer" key={index}>
                            <strong> {mensagem.usuario} </strong>: {mensagem.mensagem}
                        </div>
                    )
                })}
                <Footer show={this.show} />
            </Container>
        );
    }
}
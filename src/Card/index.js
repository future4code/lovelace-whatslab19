import React from 'react'
import { Footer } from '../Footer'
import { Container } from './style'

export class Card extends React.Component {

    state = {
        mensagens: []
    }

    show = (mensagem, usuario) => {
        this.setState({ mensagens: [...this.state.mensagens, { mensagem, usuario }] })
        console.log(mensagem, usuario, this.state.mensagens, "MOSTRANDO")
    }

    render() {
        return (
            <Container>
                <h3>WhatsLab</h3>
                {this.state.mensagens.map((mensagem) => {

                    return (
                        <div>
                            <p>
                                {mensagem.usuario}
                            </p>
                            <p>
                                {mensagem.mensagem}
                            </p>
                        </div>
                    )
                })}
                <Footer show={this.show} />
            </Container>
        );
    }
}
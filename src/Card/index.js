import React from 'react'
import { Footer } from '../Footer'
import { Container } from './style'

export class Card extends React.Component {


    render() {
        return (
            <Container>
                <h3>WhatsLab</h3>
                <Footer/>
            </Container>
        );
    }
}
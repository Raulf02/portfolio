import React from "react";

import Card from "../Components/Card"

import ttt from "../Assets/Images/ttt.jpg"
import notebook from "../Assets/Images/notebook.jpg"
import portfolio from "../Assets/Images/portfolio.png"
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tic-Tac-Toe',
                    subTitle: 'Gussing game',
                    imgSrc: ttt,
                    link: 'https://github.com/patrik-fredlund/GruppProjekt2_Grupp11',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Portfolio',
                    subTitle: 'My personal home page',
                    imgSrc: portfolio,
                    link: 'https://github.com/Raulf02/portfolio',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Quire',
                    subTitle: 'Notebook for everyone',
                    imgSrc: notebook,
                    link: 'https://github.com/maxjander/fe20tp1_keyboard',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !==id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} 
            click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }
}

export default Carousel;
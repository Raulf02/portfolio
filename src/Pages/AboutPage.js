import React from "react"
import Attention from "../Components/Attention"
import Content from "../Components/Content"

function AboutPage(props){

    return(
        <div>
            <Attention title={props.title}/>

            <Content>
                <p>Hey, My name is Raulf. I'm a Front-end developer student at KYH. I have experience in vanilla JS, HTMl, CSS and React.</p>

                <p>My dream is to one day to start calling my self that I'm a full stack developer.</p>

                <p>I love learning new things, currently I'm learning React and firebase.</p>
                <p>My latest project, Quire, is a notebook for everyone, it's very simple to use and a Tic-Tac-Toe game. It's build with Html, Css and Vanilla JS. I have some ongoing project like a Summercabin renting website for my foster parents and a drinking game App for my friends.</p>
            </Content>
        </div>
    )
}

export default AboutPage
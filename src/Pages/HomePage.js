
import React from "react"

import Attention from "../Components/Attention"
import Carousel from "../Components/Carousel"

function HomePage(props){

    return(

        <div>
            <Attention 
                title={props.title} 
                subTitle={props.subTitle} 
                text={props.text}/>
                <Carousel />
        </div>
    )
}

export default HomePage
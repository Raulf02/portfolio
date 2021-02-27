import React, { Component } from 'react';

const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ data: json }));

    }

    render() {
    

        console.log("Hej från Weathers render");
        return (<span>It feels like {this.state.data ? this.state.data.main.feels_like.toFixed(1) : '?'} °C in Kalmar right now.</span>)
    }

}

export default Weather
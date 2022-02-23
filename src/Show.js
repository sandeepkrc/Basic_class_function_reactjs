import React from "react";
import { Component } from "react";
 
import axios from "axios";

export default class Show extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/d/routeusers/")
            .then((res) => {
                console.log(res.data.categoryList);
                this.setState({ data: res.data.categoryList })
               
            })
            .catch(err => console.error(err));

    }




    render() {
        return(
            <div>
            {this.state.data.map(data => {
                           return (
                             
                                <p> {data.id}</p>
                           );
                           }
                           )
                           }

</div>
        );
        

    }
}
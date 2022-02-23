import axios from 'axios';
const api = axios.get("http://127.0.0.1:8000/d/routeusers/");



// Axios also provides a set of shorthand method for performing different HTTP requests. The Methods are as follows:

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
export default api;




// import React from "react";
// import { Component } from "react";
// // import { Button, Col, Container, Form, Row } from "react-bootstrap";
// // import Layout from "../../components/Layout/index";
// // import Input from "../../components/UI/Input";
// import axios from "axios";

// export default class ShowCategory extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             data: [],
//         }
//     }
//     componentDidMount() {
//         axios
//             .get("http://localhost:2000/api/category/getCategory")
//             .then((res) => {
//                 console.log(res.data.categoryList);
//                 this.setState({ data: res.data.categoryList })
//                 // this.setState({ data: res.data.categoryList })
//                 //    console.log(res.data.categoryList);
//             })
//             .catch(err => console.error(err));

//     }
//     render() {

//         //const {users}=this.state


//         // console.log(users)
//         return (

//             <div>
//                 {this.state.data.map(data => {
//                     // return (
//                         // <>
//                             {/* <p>{data._id}</p> */}
//                         // </>)
//                         return data.children.map(item => {
//                             return (<>
//                             <p>{data.name}</p>
//                             <p>{item.name}</p></>
//                             )
//                         }
//                         )
//                 })}


//             </div>);

//     }
// }
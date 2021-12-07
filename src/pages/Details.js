
import axios from "axios";
import React, { Component } from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params._id,
      data: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/products/${this.props.match.params._id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
  }

  render() {
    return (
  <div >
    <Link to="/">
    <Button variant="contained" disableElevation>
      Retour
    </Button>
    </Link>
    <div className="container">
      {this.state.loading ? (
        <div>Loading...</div>
      ) : (
        <div key={this.state.data._id}>
          <h1>{this.state.data.name}</h1>
          
          <p>{this.state.data.description}</p>
        
        </div>
      )}
    </div>
  </div>
    );
  }
}

export default Details;

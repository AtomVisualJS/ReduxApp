import React from "react";
import axios from "axios";

class NewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      title: "",
      price: "",
      description: "",
  
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
 
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Imguser", this.state.file);
    formData.append("title", this.state.title);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
   

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:5000/api/products", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  onPriceChange(e) {
    this.setState({ price: e.target.value });
  }
  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload</h1>
          <label> Title: </label>
          <input type="text" name="title" onChange={this.onTitleChange} />{" "}
          <br />
          <br />
          <label> Price: </label>
          <input type="text" name="price" onChange={this.onPriceChange} />{" "}
          <br />
          <br />
          <label> Description: </label>
          <input
            type="text"
            name="description"
            onChange={this.onDescriptionChange}
          />{" "}
          <br />
          <br />
       
          <label> Image: </label>
          <input type="file" name="myImage" onChange={this.onChange} />
          <br />
          <br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default NewProducts;
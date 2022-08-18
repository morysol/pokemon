import { Component } from "react";
import {} from "react-dom";
import { Formik, Form, Field } from "formik";
// react-tostify

export default class PokemonForm extends Component {
  state = { inputName: "" };

  // handleNameChange = (event) => {
  //   this.setState({ inputName: event.currentTarget.value.toLowerCase() });
  // };

  // handleNameChange = (event) => {
  //   console.log("handleNameChange   ", event);
  // };

  handleOnChange = (event) => {
    // console.log("----event------", event.target.name);
    // console.log("----event------", event.target.value);
    // console.log("----event------", event.target.type);
    // console.log("----------", event.target.name);

    this.setState({ inputName: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // todo: validation with yup
    //
    // console.log(event.currentTarget.elements.pokemonName.value);
    // console.log(event.target.elements.pokemonName.value);

    this.props.onSubmit(this.state.inputName);
    this.setState({ inputName: "" });
  };

  handleSubmitFormik = (values, actions) => {
    // actions.preventDefault();

    console.log("handleSubmitFormik   ");
    console.log("values   ", values);
    console.log("actions  ", actions);

    // this.props.onSubmit(values.pokemonName);
    this.props.onSubmit(this.state.inputName);
    this.setState({ inputName: "" });

    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ pokemonName: "" }}
        onSubmit={this.handleSubmitFormik}
      >
        <Form>
          <Field
            type="text"
            name="pokemonName"
            value={this.state.inputName}
            onChange={this.handleOnChange}
          />
          <button type="submit">Find</button>
        </Form>
      </Formik>
    );
  }
}

// onSubmit={this.handleSubmit}
// value={this.state.inputName}
// onChange={this.handleNameChange}

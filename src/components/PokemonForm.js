import { Component } from "react";
// import {} from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
// react-tostify

const INITIAL_STATE = {
  pokemonName: "",
  qqq: "",
};

const pokemonSchema = Yup.object().shape({
  pokemonName: Yup.string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

const PokemonFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export default class PokemonForm extends Component {
  state = { ...INITIAL_STATE };

  // handleNameChange = (event) => {
  //   this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  // };

  // handleNameChange = (event) => {
  //   console.log("handleNameChange   ", event);
  // };

  handleOnChange = (event) => {
    // console.log("----event------", event.target.name);
    // console.log("----event------", event.target.value);
    // console.log("----event------", event.target.type);
    // console.log("----------", event.target.name);

    this.setState({ pokemonName: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // todo: validation with yup
    //
    // console.log(event.currentTarget.elements.pokemonName.value);
    // console.log(event.target.elements.pokemonName.value);

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  // взять универсальный  handleOnChange из конспекта и урока

  handleSubmitFormik = (values, actions) => {
    // actions.preventDefault();

    // console.log("handleSubmitFormik   ");
    // console.log("values   ", values);
    console.log("values pokemonName  ", values.pokemonName);
    console.log("values  qqq ", values.qqq);
    // console.log("actions  ", actions);

    values.pokemonName && this.props.onSubmit(values.pokemonName);
    // this.props.onSubmit(this.state.pokemonName);
    this.setState(INITIAL_STATE);

    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={pokemonSchema}
        onSubmit={this.handleSubmitFormik}
      >
        <PokemonFormStyled>
          <Field
            type="text"
            name="pokemonName"
            // value={this.state.pokemonName}
            // onChange={this.handleOnChange}
          />
          <ErrorMessage name="pokemonName" />
          <Field
            type="text"
            name="qqq"
            // value={this.state.pokemonName}
            // onChange={this.handleOnChange}
          />
          <button type="submit">Find</button>
        </PokemonFormStyled>
      </Formik>
    );
  }
}

// onSubmit={this.handleSubmit}
// value={this.state.pokemonName}
// onChange={this.handleNameChange}

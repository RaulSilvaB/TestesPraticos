import { Component } from "react";

class ProfileClass extends Component {
  render() {
    const { name, age, job } = this.props;

    return (
      <>
        <h4>Nome: {name}</h4>
        <p>Idade: {age}</p>
        <p>Trabalho: {job}</p>
      </>
    );
  }
}

export default ProfileClass;

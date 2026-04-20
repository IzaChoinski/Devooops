import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      mensagem: ""
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleSenha = this.handleSenha.bind(this);
    this.validar = this.validar.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleSenha(e) {
    this.setState({ senha: e.target.value });
  }

  validar() {
    const emailCorreto = "eduardo.lino@pucpr.br";
    const senhaCorreta = "123456";

    if (
      this.state.email === emailCorreto &&
      this.state.senha === senhaCorreta
    ) {
      this.setState({ mensagem: "Acessado com sucesso!" });
    } else {
      this.setState({ mensagem: "Usuário ou senha incorretos!" });
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChange={this.handleEmail}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={this.state.senha}
          onChange={this.handleSenha}
        />

        <button onClick={this.validar}>Acessar</button>

        <p>{this.state.mensagem}</p>
      </div>
    );
  }
}

export default Login;
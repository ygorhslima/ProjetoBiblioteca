import './style.css'

export default function FormInputCadUsuario() {
  return (
    <div className="form-cad">
        <label>Nome Completo</label>
        <input type="text" className="input-cadastro" />

        <label>E-mail</label>
        <input type="email" className="input-cadastro" />

        <label>CPF</label>
        <input type="text" className="input-cadastro" />

        <label>Telefone / WhatsApp</label>
        <input type="text" className="input-cadastro" />

        <label>Senha</label>
        <input type="password" className="input-cadastro" />

        <button className="btn_cadastro">Cadastre-se</button>
    </div>
  );
}

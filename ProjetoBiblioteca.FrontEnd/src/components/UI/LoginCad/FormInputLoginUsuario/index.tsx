import './style.css'

export default function FormInputLoginUsuario() {
  return (
    <div className="form-login">
        <label>CPF</label>
        <input type="text" className="input-login" />

        <label>Senha</label>
        <input type="password" className="input-login" />
        
        <button className="btn_login">login</button>
    </div>
  );
}

import wallpaper from "../../../assets/wallpaper.jpg";
import './style.css'
export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="form-login">
        <label>CPF</label>
        <input type="text" className="input-login" />

        <label>Senha</label>
        <input type="password" className="input-login" />

        <button className="btn_login">login</button>
      </div>
    </div>
  );
}

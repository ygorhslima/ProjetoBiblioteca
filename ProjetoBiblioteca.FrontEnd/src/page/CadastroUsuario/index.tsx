import wallpaper from "../../assets/wallpaper.jpg";
import FormInputCadUsuario from "../../components/UI/LoginCad/FormInputCadUsuario";

export default function CadastroUsuario() {
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
      <FormInputCadUsuario/>
    </div>
  );
}

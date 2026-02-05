import wallpaper from "../../assets/wallpaper.jpg";
import FormInputLoginUsuario from "../../components/UI/LoginCad/FormInputLoginUsuario";

export default function LoginUsuario() {
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
      <FormInputLoginUsuario/>
    </div>
  );
}

import "./style.css";
import wallpaper from "../../assets/wallpaper.jpg";
import FormInput from "../../components/UI/FormInput";

export default function AddBooks() {
  return (
    <div
      className="add-books"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <FormInput />
    </div>
  );
}

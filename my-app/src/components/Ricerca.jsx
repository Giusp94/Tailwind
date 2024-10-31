import { ImgRounded } from "./ImgRounded";
import { InputText } from "./InputText";
import src from "../assets/react.svg";

export function Ricerca() {
  return (
    <>
      <InputText placeholder="Search Your Product" />
      <ImgRounded src={src} alt="Search Button" />
    </>
  );
}

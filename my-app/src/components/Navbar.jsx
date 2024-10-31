import { ImgRounded } from "./ImgRounded";
import { Menu } from "./Menu";
import { Ricerca } from "./Ricerca";
import { User } from "./User";
import src from "../assets/react.svg";

export function Navbar() {
  return (
    <>
      <section className="flex items-center justify-between bg-blue-500 h-16 p-3 shadow shadow-blue-900 w-screen">
        <ImgRounded src={src} alt="Home Page" />
        <Menu />
        <Ricerca />
        <User />
      </section>
    </>
  );
}

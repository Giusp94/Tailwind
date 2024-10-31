import { ImgFullHeigth } from "./ImgFullHeigth";
import { Paragraph } from "./Paragraph";
import src from "../assets/react.svg";

export function Hero() {
  return (
    <section className="bg-blue-300 h-1/4 text-center ">
      <h3 className="text-5xl">Hero</h3>
      <section className="p-12 flex flex-row justify-between">
        <ImgFullHeigth src={src} alt="Immagine Pub" />
        <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim, ipsum eligendi assumenda, non distinctio laboriosam aut recusandae dolorum hic, placeat error eveniet veritatis? Voluptatibus, recusandae tempore! Vero, iusto nisi." />
      </section>
    </section>
  );
}

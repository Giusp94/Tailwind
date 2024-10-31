export function ImgRounded({ src, alt }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="h-12 w-12 border border-x-blue-950 rounded-3xl"
      />
    </>
  );
}

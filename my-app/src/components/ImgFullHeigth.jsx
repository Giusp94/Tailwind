export function ImgFullHeigth({ src, alt }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="ml-16 h-full w-1/4 bg-black bg-opacity-70 p-2 rounded-lg"
      />
    </>
  );
}

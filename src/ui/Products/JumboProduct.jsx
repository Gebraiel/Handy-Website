export default function JumboProduct({ product, view }) {
  return (
    <div
      className={`p-6 ${
        view == "list"
          ? "flex flex-col md:flex-row items-center"
          : "flex flex-col items-center"
      } gap-5 bg-white shadow-md`}
    >
      <div className={`w-full  ${view == "list" ? " pl-5 lg:w-1/4" : ""}`}>
        {product.image ? (
          <img className="m-auto" src={product.image} alt="Product Image" />
        ) : (
          <div className="bg-white w-full aspect-square"></div>
        )}
      </div>
      <div
        className={`flex flex-col ${
          view == "list" ? "lg:flex-row" : ""
        } justify-between flex-grow w-full`}
      >
        <div>
          <h1 className="text-primary text-3xl font-bold mb-5">
            {product.title}
          </h1>
          {/* <h2 className="text-secondary text-xl font-bold my-2 capitalize">{product.subtitle}</h2> */}
          <div
            className="product-details"
            dangerouslySetInnerHTML={{ __html: product.text }}
          />
        </div>
      </div>
    </div>
  );
}

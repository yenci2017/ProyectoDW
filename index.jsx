export const CardProduct = (props) => {
  const {
    name = "",
    category = "",
    price = 0,
    image = {thumbnail:'', mobile:'',tablet:'',desktop:''},
  } = props.product;

  const handleClick = () => {
    props.onAddCart({ name:name, quantity: 1 });
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image.desktop} alt={name} className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

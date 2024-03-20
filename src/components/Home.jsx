import "../styles/home.css";

const productList = [
  {
    name: "Laptop",
    price: 100000,
    src: "Laptop.jpg",
    id: "1",
  },
  {
    name: "Charger",
    price: 500,
    src: "Charger.webp",
    id: "2",
  },
  {
    name: "Pendrive",
    price: 800,
    src: " Pendrive.webp",
    id: "3",
  },
  {
    name: "Keyboard & Mouse",
    price: 600,
    src: "Keyboard & Mouse.jpg",
    id: "4",
  },
  {
    name: "Phone",
    price: 15000,
    src: "Phone.webp",
    id: "5",
  },
  {
    name: "LED Lights",
    price: 100,
    src: "LED Lights.webp",
    id: "6",
  },
  {
    name: "Watch",
    price: 5000,
    src: "Watch.webp",
    id: "7",
  },
];

const Home = ({ addToCart }) => {
  const ProductCard = ({ src, name, price, addToCart, id }) => {
    return (
      <div className="product-card">
        <img src={src} alt="" />
        <p>{name}</p>
        <h4>₹ {price}</h4>
        <button onClick={() => addToCart({ src, name, price, id })}>
          Add to CART
        </button>
      </div>
    );
  };

  return (
    <div className="home">
      {productList.map((item) => {
        return (
          <ProductCard
            key={item.id}
            price={item.price}
            name={item.name}
            id={item.id}
            src={item.src}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};

export default Home;

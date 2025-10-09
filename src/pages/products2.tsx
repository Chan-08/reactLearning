import { useState } from "react";

export default function Products2() {
  const productsData = [
    { id: 1, title: "Wireless Headphones", description: "Experience immersive sound with active noise cancellation and 30 hours of battery life.", image: "https://picsum.photos/300/300?random=1", link: "#" },
    { id: 2, title: "Smart Watch", description: "Stay connected and track your fitness with heart-rate monitoring, GPS, and message alerts.", image: "https://picsum.photos/300/300?random=2", link: "#" },
    { id: 3, title: "Gaming Mouse", description: "Enhance your gameplay with a high-precision sensor, RGB lighting, and customizable buttons.", image: "https://picsum.photos/300/300?random=3", link: "#" },
    { id: 4, title: "Bluetooth Speaker", description: "Enjoy deep bass and crystal-clear audio with this portable Bluetooth 5.0 speaker.", image: "https://picsum.photos/300/300?random=4", link: "#" },
    { id: 5, title: "Home Theater Speaker", description: "Powerful 5.1 channel surround sound system for an immersive home entertainment experience.", image: "https://picsum.photos/300/300?random=5", link: "#" },
    { id: 6, title: "True Wireless Earbuds (TWS)", description: "Compact and lightweight earbuds with touch controls, fast charging, and long playback time.", image: "https://picsum.photos/300/300?random=6", link: "#" },
    { id: 7, title: "Bluetooth Neckband", description: "Flexible neckband earphones with deep bass, fast charging, and up to 20 hours of playback.", image: "https://picsum.photos/300/300?random=7", link: "#" },
    { id: 8, title: "Realme Neckband", description: "Stylish Realme neckband with magnetic earbuds, quick charge support, and noise isolation.", image: "https://picsum.photos/300/300?random=8", link: "#" },
  ];

  const [displayProducts, setDisplayProducts] = useState(productsData);

  const showAll = () => setDisplayProducts(productsData);
  const showReverse = () => setDisplayProducts([...productsData].sort((a, b) => b.id - a.id));

  // Filter function: receives value from button
  const filterProducts = (value: number) => {
    const filtered = productsData.filter((product) => product.id > value);
    setDisplayProducts(filtered);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-primary my-3">Products Page with dynamic product cards</h1>

      <div className="mb-4 d-flex gap-3">
        <button className="btn btn-primary" onClick={showAll}>
          Show All
        </button>

        <button className="btn btn-success" onClick={() => filterProducts(4)}>
          Filtered (ID 4)
        </button>

        <button className="btn btn-success" onClick={() => filterProducts(6)}>
          Filtered (ID 6)
        </button>

        <button className="btn btn-warning" onClick={showReverse}>
          Reverse Order
        </button>
      </div>

      <div className="row g-4">
        {displayProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img className="card-img-top img-fluid rounded" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">id : {product.id}</p>
                <a href={product.link} className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

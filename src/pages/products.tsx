export default function Products() {
  const productsData = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Experience immersive sound with active noise cancellation and 30 hours of battery life.",
      image: "https://picsum.photos/300/300?random=1",
      link: "#"
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Stay connected and track your fitness with heart-rate monitoring, GPS, and message alerts.",
      image: "https://picsum.photos/300/300?random=2",
      link: "#"
    },
    {
      id: 3,
      title: "Gaming Mouse",
      description: "Enhance your gameplay with a high-precision sensor, RGB lighting, and customizable buttons.",
      image: "https://picsum.photos/300/300?random=3",
      link: "#"
    },
    {
      id: 4,
      title: "Bluetooth Speaker",
      description: "Enjoy deep bass and crystal-clear audio with this portable Bluetooth 5.0 speaker.",
      image: "https://picsum.photos/300/300?random=4",
      link: "#"
    },
    {
      id: 5,
      title: "Home Theater Speaker",
      description: "Powerful 5.1 channel surround sound system for an immersive home entertainment experience.",
      image: "https://picsum.photos/300/300?random=5",
      link: "#"
    },
    {
      id: 6,
      title: "True Wireless Earbuds (TWS)",
      description: "Compact and lightweight earbuds with touch controls, fast charging, and long playback time.",
      image: "https://picsum.photos/300/300?random=6",
      link: "#"
    },
    {
      id: 7,
      title: "Bluetooth Neckband",
      description: "Flexible neckband earphones with deep bass, fast charging, and up to 20 hours of playback.",
      image: "https://picsum.photos/300/300?random=7",
      link: "#"
    },
    {
      id: 8,
      title: "Realme Neckband",
      description: "Stylish Realme neckband with magnetic earbuds, quick charge support, and noise isolation.",
      image: "https://picsum.photos/300/300?random=8",
      link: "#"
    }
  ];

  const reverseOrder = [...productsData].sort((x, y) => y.id - x.id); //decending order respective to id

  const filteredProducts = productsData.filter((x) => x.id > 4)

  return (
    <>
      <h1 className="text-primary">Products Page</h1>
      <div className="container-fluid">
        <div className="row g-4">
          {productsData.map((product) => (
            product.id && <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top img-fluid rounded"
                  src={product.image}
                  alt={product.title}
                />
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

        <h2 className="my-4">Filtered by id above 4</h2>

        <div className="row g-4">
          {filteredProducts.map((product) => (
            product.id && <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top img-fluid rounded"
                  src={product.image}
                  alt={product.title}
                />
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

        <h2 className="my-4">Reverse Order</h2>

        <div className="row g-4">
          {reverseOrder.map((product) => (
            product.id && <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top img-fluid rounded"
                  src={product.image}
                  alt={product.title}
                />
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
    </>
  );
}

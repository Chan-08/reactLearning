export default function Products() {
  const productsData = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "High-quality over-ear wireless headphones with noise cancellation.",
      image: "https://picsum.photos/250/300?random=1",
      link: "#"
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Track your fitness goals and stay connected on the go.",
      image: "https://picsum.photos/250/300?random=2",
      link: "#"
    },
    {
      id: 3,
      title: "Gaming Mouse",
      description: "Ergonomic mouse with RGB lighting and precision control.",
      image: "https://picsum.photos/250/300?random=3",
      link: "#"
    },
    {
      id: 4,
      title: "Bluetooth Speaker",
      description: "Portable speaker with crystal-clear sound and long battery life.",
      image: "https://picsum.photos/250/300?random=4",
      link: "#"
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      description: "Portable speaker with crystal-clear sound and long battery life.",
      image: "https://picsum.photos/250/300?random=5",
      link: "#"
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      description: "Portable speaker with crystal-clear sound and long battery life.",
      image: "https://picsum.photos/250/300?random=6",
      link: "#"
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      description: "Portable speaker with crystal-clear sound and long battery life.",
      image: "https://picsum.photos/250/300?random=7",
      link: "#"
    }
  ];

  return (
    <>
      <h1 className="text-primary">Products Page</h1>
      <div className="container-fluid">
        <div className="row g-4">
          {productsData.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top img-fluid rounded"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
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

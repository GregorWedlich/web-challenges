import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} {product.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

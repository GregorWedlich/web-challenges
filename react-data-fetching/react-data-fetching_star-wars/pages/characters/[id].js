import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

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

export default function Character() {
  const router = useRouter();
  // console.log(`router`, router);

  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <Card
          id={id}
          name={data.name}
          height={data.height}
          eyeColor={data.eyeColor}
          birthYear={data.birthYear}
        />
      )}
    </Layout>
  );
}

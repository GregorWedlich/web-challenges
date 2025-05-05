import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleButtonClick() {
    const randomVolume = getRandomElement(volumes);

    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={title}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>Random Volume</button>
    </>
  );
}

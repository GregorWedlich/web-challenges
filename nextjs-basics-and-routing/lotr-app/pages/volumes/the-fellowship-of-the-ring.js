import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={`${book.ordinal}`}>
            {book.ordinal}
            <strong>{book.title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={`Cover image ${volume.title}`}
        width={140}
        height={230}
      />
    </>
  );
}

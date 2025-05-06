import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  return (
    <PageContainer>
      <MainHeading>The Lord of the Rings</MainHeading>
      <IntroText>{introduction}</IntroText>
      <SectionHeading>All volumes</SectionHeading>
      <CollectionGrid>
        {volumes.map((volume) => (
          <VolumeItem key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover ${volume.title}`}
              width={70}
              height={110}
            />
            <VolumeLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </VolumeLink>
          </VolumeItem>
        ))}
      </CollectionGrid>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  padding: 2rem;
`;

const MainHeading = styled.h1`
  font: var(--font-headline-1);
`;

const IntroText = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const SectionHeading = styled.h2`
  font: var(--font-headline-2);
`;

const CollectionGrid = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
`;

const VolumeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 80px;
`;

const VolumeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font: var(--font-caption);
  text-align: center;
`;

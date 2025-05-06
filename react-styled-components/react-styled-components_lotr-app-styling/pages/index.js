import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Wrapper>
      <StyledLink href="/volumes">Go to all volumes</StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  place-content: center;
  place-items: center;
  min-height: 100vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
  font: var(--font-headline-2);
`;

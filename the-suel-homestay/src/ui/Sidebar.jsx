import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
function Sidebar() {
  const StyledAside = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3rem 3.5rem;
    border-bottom: goldenrod var(--color-grey-100) solid;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `;
  return (
    <StyledAside>
      <Logo />
      <MainNav />
    </StyledAside>
  );
}

export default Sidebar;

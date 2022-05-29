import { ReactElement } from 'react';
import styled from 'styled-components';
import { ActivateDeactivate } from './components/ActivateDeactivate';
import { Greeter } from './components/Greeter';
import { SectionDivider } from './components/SectionDivider';
import { SignMessage } from './components/SignMessage';
import { WalletStatus } from './components/WalletStatus';
import { Mail } from './components/Mail';
import { Account } from './components/Account';
const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export function App(): ReactElement {
  return (
    <StyledAppDiv>
      <ActivateDeactivate />

      <SectionDivider />
      <Account />
      <SectionDivider />
      <Mail />

    </StyledAppDiv>
  );
}

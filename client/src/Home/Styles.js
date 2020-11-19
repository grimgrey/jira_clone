import styled from 'styled-components';

import { font, sizes } from 'shared/utils/styles';

const paddingLeft = sizes.appNavBarLeftWidth;

export const HomePage = styled.div`
  padding: 25px 32px 50px ${paddingLeft}px;

  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
  }
`;

export const Heading = styled.div`
  ${font.size(36)}
  ${font.medium}
`;

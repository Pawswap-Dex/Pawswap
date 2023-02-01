import React from 'react'
import styled from 'styled-components/macro'
import { Z_INDEX } from 'theme'

export const BodyWrapper = styled.main<{ margin?: string; maxWidth?: string }>`
  position: relative;
  margin-top: ${({ margin }) => margin ?? '0px'};
  max-width: ${({ maxWidth }) => maxWidth ?? '480px'};
  width: 100%;
  // background: ${({ theme }) => theme.bg0};
  background: #39250e;
  // background-image: linear-gradient(to bottom, rgba(134, 127, 85, 0), rgba(134, 127, 85, 0));
  // box-shadow: -3px 0px 58px -10px #867f55;
  border-radius: 10px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  // border: 2px solid #DE9034;
  box-shadow:  20px 20px 60px #bd7a2c,
             -20px -20px 60px #ffa63c;
  z-index: ${Z_INDEX.deprecated_content};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, ...rest }: { children: React.ReactNode }) {
  return <BodyWrapper {...rest}>{children}</BodyWrapper>
}

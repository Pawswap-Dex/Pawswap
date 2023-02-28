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
  // border-radius: 10px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  // border: 2px solid #FD9E9A;
  // box-shadow:  20px 20px 60px #bd7a2c,
  //            -20px -20px 60px #ffa63c;
  text-align: left;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: space-between;
  color: rgb(255, 255, 255);
  box-shadow: rgb(254, 49, 60) 5px 5px 0px -2px;
  padding: 18px;
  border-width: initial;
  border-style: initial;
  border-color: #FAC0B5;
  border-image: initial;
  outline: 0px;
  background: #FAC0B5;
  transition: all 0.35s ease 0s;
  z-index: ${Z_INDEX.deprecated_content};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, ...rest }: { children: React.ReactNode }) {
  return <BodyWrapper {...rest}>{children}</BodyWrapper>
}

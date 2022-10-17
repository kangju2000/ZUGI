import type { NextPage } from 'next';
import styled from 'styled-components';
import About from '../src/components/About/About';
import Home from './../src/components/Home';
import Projects from '../src/components/Projects/Projects';

const LandingPage: NextPage = () => {
  return (
    <Wrapper>
      <Menu>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
        </ul>
      </Menu>
      <Content>
        <Home />
        .
        <About />
        .
        <Projects />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black_background};
`;

const Menu = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 36rem;
  height: 100%;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 999;
  li {
    padding: 1rem;
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 156rem;
  padding-left: 36rem;
  padding-right: 36rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.white};
`;

export default LandingPage;

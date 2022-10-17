import styled, { keyframes } from 'styled-components';

interface Props {
  percent: string;
}

const ProgressBar = ({ percent }: Props): JSX.Element => {
  return (
    <Container>
      <Inner percent={percent}></Inner>
    </Container>
  );
};

const FillProgress = (width: string) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`;

const Container = styled.div`
  position: relative;
  width: 14rem;
  height: 1.3rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`;

const Inner = styled.div<{ percent: string }>`
  position: absolute;
  height: 100%;
  border-radius: 0.5rem;
  animation: ${({ percent }) => FillProgress(percent)} 2s linear;
  background-color: ${({ theme }) => theme.color.black};
  animation-fill-mode: forwards;
`;

export default ProgressBar;

import { Container } from '../../styles/theme';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const About = () => {
  const profile = [
    { key: '이름', value: '강주혁' },
    { key: '생년월일', value: '2000.11.10' },
    { key: '전화번호', value: '010.2018.0262' },
    { key: '이메일', value: 'kangju2000@naver.com' },
  ];

  const skill = [
    { key: 'HTML / CSS', value: '70%' },
    { key: 'JavaScript', value: '70%' },
    { key: 'React.js', value: '60%' },
    { key: 'TypeScript', value: '30%' },
  ];

  return (
    <AboutContainer>
      <Box>
        <BoxTitle>강주혁</BoxTitle>
        <BoxContent>프론트엔드 개발자를 꿈꾸고 있는 예비 개발자입니다.</BoxContent>
      </Box>
      <BoxContainer>
        <Box>
          <BoxTitle>PROFILE</BoxTitle>
          <BoxContent>
            {profile.map((item) => (
              <p key={item.key}>{`${item.key}: ${item.value}`}</p>
            ))}
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>EDUCATION</BoxTitle>
          <BoxContent>
            2019~ <br />
            Gachon Univ. <br />· Computer Engineering
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>WORK</BoxTitle>
          <BoxContent>None</BoxContent>
        </Box>
        <Box>
          <BoxTitle>SKILLS</BoxTitle>
          <BoxContent>
            {skill.map((item) => (
              <div style={{ display: 'flex', alignItems: 'center' }} key={item.key}>
                <p style={{ width: '13rem' }}>{item.key}</p>
                <ProgressBar percent={item.value} />
              </div>
            ))}
          </BoxContent>
        </Box>
      </BoxContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled(Container)`
  padding-top: 18rem;
`;

const Box = styled.div`
  width: 48rem;
  min-height: 19rem;
  padding: 1rem;
`;

const BoxTitle = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 3rem;
`;

const BoxContent = styled.div`
  font-size: 1.8rem;
  line-height: 1.5;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10rem 3rem;
`;

export default About;

import { Container } from '../../styles/theme';
import styled from 'styled-components';
import Image from 'next/image';
import profileImg from '../../public/profile.jpg';
import GithubIcon from '../../public/github.svg';
import InstagramIcon from '../../public/instagram.svg';
import Link from 'next/link';

const Home = () => {
  return (
    <HomeContainer>
      <div style={{ display: 'flex' }}>
        <ProfileImage>
          <Image alt="주기" src={profileImg} width="250" height="250" objectFit="cover" />
        </ProfileImage>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: '600' }}>Juhyeok Kang</h1>
          <p style={{ margin: '1rem 0 7rem' }}>Junior Front-end Developer</p>
          <Contact>
            <Link href="https://github.com/kangju2000">
              <div>
                <span>
                  <Image alt="Github" src={GithubIcon} width="18" height="18" objectFit="cover" />
                </span>
                Github
              </div>
            </Link>
            <Link href="https://www.instagram.com/11kangju00/">
              <div>
                <span>
                  <Image
                    alt="Instagram"
                    src={InstagramIcon}
                    width="18"
                    height="18"
                    objectFit="cover"
                  />
                </span>
                Instagram
              </div>
            </Link>
          </Contact>
        </div>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  padding-top: 29rem;
`;

const ProfileImage = styled.div`
  margin-right: 2rem;
  img {
    border-radius: 50%;
  }
`;

const Contact = styled.div`
  display: flex;
  padding: 1rem 0;
  span {
    margin-right: 0.5rem;
  }
  div {
    display: flex;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export default Home;

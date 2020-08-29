import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, HeadingCalendar, RepoIcon, Tab } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';


const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">30</span>
    </div>
  );
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'diebraga'}
            name={'Diego Braga'}
            avatarURL={'https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4'}
            followers={21}
            following={10}
            company={'Inv Techs'}
            location={'Limerick, Ireland'}
            email={'diebraga0055@gmnail.com'}
            blog={'www.linkedin.com/in/diebraga'}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random repos</h2>

              <div>{[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'diebraga'}
                  reponame={'typescript-node'}
                  description={'express aplication using typescript'}
                  language={n % 3 === 0 ? 'Typescript' : 'Javascript'}
                  stars={3}
                  forks={1}
                />
              ))}</div>
          </Repos>
          <HeadingCalendar>
            Random Calendar (Doesn't represent actual data)
          </HeadingCalendar>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile;
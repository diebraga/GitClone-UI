import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'diebraga'}
            name={'Diego Braga'}
            avatarURL={'https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4'}
            followers={2134}
            following={1000}
            company={'Inv Techs'}
            location={'Limerick, Ireland'}
            email={'diebraga0055@gmnail.com'}
            blog={'www.linkedin.com/in/diebraga'}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  )
}

export default Profile;
import React from 'react';

import { Container, Flex, Avatar, PeopleIcon, Row, ComapanyIcon, EmailIcon, BlogIcon, LocatinIcon, Column } from './styles';

interface Proops {
  username: string;
  name: string;
  avatarURL: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;

}

const ProfileData: React.FC<Proops> = ({

  username,
  name,
  avatarURL,
  followers,
  following,
  company,
  location,
  email,
  blog,

}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarURL} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {company && (
          <li>
            <ComapanyIcon />
            <span>{company}</span>
          </li>
        )}
                {location && (
          <li>
            <LocatinIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  )
}

export default ProfileData;
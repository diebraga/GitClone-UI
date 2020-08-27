import React from 'react';

// import { Container } from './styles';

interface Proops {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Proops> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,

}) => {
  return <div />;
}

export default RepoCard;
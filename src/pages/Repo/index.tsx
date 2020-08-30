import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
      <RepoIcon />
      <Link className={'username'} to={'/diebraga'}>
        diebraga
      </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/diebraga/typescript-node'}>
          typescript-node
        </Link>
      </Breadcrumb>

      <p>Node app wrote in typescript</p>

      <Stats>
        <li>
          <StarIcon />
            <b>1</b>
            <span>stars</span>
        </li>
        <li>
          <ForkIcon />
            <b>0</b>
            <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={'https://github.com/diebraga/typescript-node'}>
      <GithubIcon />
      <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;
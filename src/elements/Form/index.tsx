import { useState } from 'react';
import eye from 'assets/images/eye.svg';

import * as Styled from './styles';
import uneye from '../../assets/images/uneye.svg';
import email from '../../assets/images/email.svg';
import username from '../../assets/images/username.svg';
import name from '../../assets/images/user.svg';

export const Form = () => {
  const [hasEye, setHasEye] = useState(false);
  const [variable, setVariable] = useState<Record<string, string>>({});

  return (
    <>
      <Styled.Main
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-ignore, cannot fix type issue
          const formData = new FormData(e.target);
          const obj = Object.fromEntries(formData);
          setVariable(obj as Record<string, string>);
        }}
      >
        <Styled.Column>
          <Styled.Position>
            <Styled.Label htmlFor="email">EMAIL</Styled.Label>
            <Styled.Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
            />
            <Styled.Icon src={email}></Styled.Icon>
          </Styled.Position>
          <Styled.Position>
            <Styled.Label htmlFor="username">UserName</Styled.Label>
            <Styled.Input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
            />
            <Styled.Icon src={username}></Styled.Icon>
          </Styled.Position>
          <Styled.Position>
            <Styled.Label htmlFor="name">Name</Styled.Label>
            <Styled.Input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
            />
            <Styled.Icon src={name}></Styled.Icon>
          </Styled.Position>
          <Styled.Position>
            <Styled.Label htmlFor="password">Password</Styled.Label>
            <Styled.Input
              type={hasEye ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              name="password"
            />
            <Styled.Icon
              $isPointer
              onClick={() => setHasEye(!hasEye)}
              src={hasEye ? uneye : eye}
            ></Styled.Icon>
          </Styled.Position>
          <Styled.Button type="submit">REG</Styled.Button>
        </Styled.Column>
      </Styled.Main>
      <Styled.Column>
        {Object.keys(variable).map((key) => (
          <Styled.Row key={key}>
            <Styled.Keys>{key}:</Styled.Keys>
            <Styled.Keys>{variable[key]}</Styled.Keys>
          </Styled.Row>
        ))}
      </Styled.Column>
    </>
  );
};

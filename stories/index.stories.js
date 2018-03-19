import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Button,
  Card,
  Header,
  Container,
  Text,
  Form,
  Input,
  Label,
  Group,
  Login } from '../lib';


storiesOf('Button', module)
  .add('Accept', () => <Button>Hello</Button>)

storiesOf('Card', module)
  .add('simple', () => <Card>This is the content of the card.</Card>)

storiesOf('Container', module)
  .add('auth', () =>
    <Container>
      <Header>
        <Text>This is the Title</Text>
      </Header>
      <Form>
        <Text> This is a form</Text>
        <Input />
      </Form>
    </Container>
  )

storiesOf('Header', module)
  .add('Page', () => <Header name={'chad'} />)

storiesOf('Input', module)
  .add('auth', () => <Input />)

storiesOf('Login', module)
  .add('simple', () =>
    <Login
      Form={Form}
      Input={Input}
      Label={Label}
      Button={Button}
      Group={Group}
      handleLogin={(data) => console.log(data)}
    />
  )

import React from 'react';

import { AsideIllustration } from '../components/asideIllustration/asideIllustration';
import { Button } from '../components/buttons/button.component';
import { Input } from '../components/inputs/input.component';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.css';

export function Home() {
  return (
    <div id='pageAuth'>
      <AsideIllustration />

      <main>
        <div className='mainContent'>
          <img className='logo' src={logoImg} alt='logo letmeask' />
          <Button variant='social' icon={<img src={googleIconImg} alt='google icon' />} >
            Crie sua sala com o Google
          </Button>
          <div className='divider'>
            ou entre em uma sala
          </div>
          <Input
            type='text'
            placeholder='Digite o código da sala'
          />
          <Button variant='primary' type='submit'>Entrar na sala</Button>
        </div>
      </main>
    </div>
  );
}
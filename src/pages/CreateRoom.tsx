import React from 'react';

import { AsideIllustration } from '../components/asideIllustration/asideIllustration';
import { Button } from '../components/buttons/button.component';
import { Input } from '../components/inputs/input.component';

import logoImg from '../assets/images/logo.svg';

import '../styles/auth.css';

export function CreateRoom() {
  return (
    <div id='pageAuth'>
      <AsideIllustration />

      <main>
        <div className='mainContent'>
          <img className='logo' src={logoImg} alt='logo letmeask' />
          <h2>Crie uma nova sala</h2>

          <Input
            type='text'
            placeholder='Nome da sala'
          />
          <Button variant='primary' type='submit'>Criar sala</Button>
          <span>Quer entrar em umal já existente? <a href='#'>Clique aqui</a></span>
        </div>
      </main>
    </div>
  );
}
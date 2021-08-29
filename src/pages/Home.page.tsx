import React from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.css';
import { Button } from '../components/buttons/button.component';
import { Input } from '../components/inputs/input.component';

export function Home() {
  return (
    <div id='pageAuth'>
      <aside>
        <div className='asideContent'>
          <img src={illustrationImg} alt='ilustração que siboliza perguntas e respostas' />
          <strong>Toda pergunta tem uma resposta</strong>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
        </div>
      </aside>

      <main>
        <div className='mainContent'>
          <img className='logo' src={logoImg} alt='logo letmeask' />
          <Button variant='social' icon={<img src={googleIconImg} alt='google icon' />} >
            Crie sua sala com o Google
          </Button>
          <div className='divider'>
            <span>ou entre em uma sala</span>
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
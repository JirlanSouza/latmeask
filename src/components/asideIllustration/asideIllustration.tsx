import React from 'react';

import illustrationImg from '../../assets/images/illustration.svg';

import './asideIllustration.css'

export const AsideIllustration: React.FC = () => {
  return (
    <aside>
      <div className='asideContent'>
        <img src={illustrationImg} alt='ilustração que siboliza perguntas e respostas' />
        <strong>Toda pergunta tem uma resposta</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </div>
    </aside>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import type { Produto } from './types';

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Smartphone Tangtung Galaxy G24',
    preco: 2499.00,
    categoria: 'Smartphones',
    destaques: [
      { id: 1, descricao: '5G' },
      { id: 2, descricao: 'Inteligência Artificial' },
      { id: 3, descricao: 'Tela AMOLED' },
    ],
  },
  {
    id: 2,
    nome: 'Kit Roteador QT-Link Neko X0',
    preco: 500.00,
    categoria: 'Redes',
    destaques: [
      { id: 1, descricao: 'Wi-Fi 6' },
      { id: 2, descricao: 'Rede Mesh' },
      { id: 3, descricao: 'Ampla Cobertura' },
    ],
    desconto: {
      percentual: 10,
      precoComDesconto: 450.00,
    },
  },
  {
    id: 3,
    nome: 'Mini Teclado Bluetooth com Touchpad',
    preco: 120.00,
    categoria: 'Periféricos',
    destaques: [
      { id: 1, descricao: 'Sem Fio' },
      { id: 2, descricao: 'Bateria Recarregável' },
      { id: 3, descricao: 'Portátil' },
    ],
    desconto: {
      percentual: 10,
      precoComDesconto: 108.00,
    },
  },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App produtos={produtos} />
  </React.StrictMode>,
);

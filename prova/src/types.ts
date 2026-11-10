
export interface Destaque {
  id: number;
  descricao: string;
}

export interface Desconto {
  percentual: number;
  precoComDesconto: number;
}

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  destaques: Destaque[];
  desconto?: Desconto;
}

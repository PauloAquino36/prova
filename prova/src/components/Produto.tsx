
import type { Produto as ProdutoType } from '../types';
import Destaques from  '../components/Destaques';
import Desconto from '../components/Desconto';

interface Props {
  produto: ProdutoType;
}

function Produto({ produto }: Props) {
  return (
    <div>
      <h2>{produto.nome}</h2>

      <p>Categoria: {produto.categoria}</p>

      <p>Preço: R$ {produto.preco.toFixed(2)}</p>

      <Destaques destaques={produto.destaques} />

      <Desconto desconto={produto.desconto} />
    </div>
  );
}

export default Produto;

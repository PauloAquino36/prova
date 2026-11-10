
import type { Produto as ProdutoType } from './types';
import Produto from './components/Produto';

interface Props {
  produtos: ProdutoType[];
}

function App({ produtos }: Props) {
  return (
    <main>
      <h1>Loja de Eletrônicos</h1>

      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </main>
  );
}

export default App;

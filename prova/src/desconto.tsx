
import type { Desconto as DescontoType } from './types';

interface Props {
  desconto?: DescontoType;
}

function Desconto({ desconto }: Props) {
  if (!desconto) {
    return <p>Sem desconto</p>;
  }

  return (
    <div>
      <p>Desconto no PIX: {desconto.percentual}%</p>

      <strong>
        R$ {desconto.precoComDesconto.toFixed(2)}
      </strong>
    </div>
  );
}

export default Desconto;

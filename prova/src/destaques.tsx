
import type { Destaque } from './types';

interface Props {
  destaques: Destaque[];
}

function Destaques({ destaques }: Props) {
  return (
    <div>
      <h3>Destaques</h3>

      <ul>
        {destaques.map((destaque) => (
          <li key={destaque.id}>
            {destaque.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Destaques;

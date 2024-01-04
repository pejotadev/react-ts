import { useState, useEffect } from 'react';
import Input from '../utils/Input';

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number;
  data: string;
}

function ListaVendas() {
  const [dataInicio, setDataInicio] = useState<string>('');
  const [dataFinal, setDataFinal] = useState<string>('');
  const [vendas, setVendas] = useState<null | Venda[]>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      if (dataInicio && dataFinal) {
        const response = await fetch(`https://data.origamid.dev/vendas/?inicio=${dataInicio}&final=${dataFinal}`);

        const json: Venda[] = await response.json();

        setVendas(json);
      }
    }
    fetchData();
  }, [dataInicio, dataFinal]);

  return (
    <>
      <div className="filter">
        <Input
          type="date"
          label="Data Início"
          labelId="inicio"
          value={dataInicio}
          setState={setDataInicio}
        />
        <Input
          type="date"
          label="Data Final"
          labelId="final"
          value={dataFinal}
          setState={setDataFinal}
        />
      </div>
      <div className="list">
        <ul>
          {vendas && vendas.map((venda: Venda) => {
            return (
              <li key={venda.id}>
                <span>{venda.nome}</span> -
                <span> {venda.status}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default ListaVendas
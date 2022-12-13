import Client from '../core/Client';
import { IconEdit, IconTrash } from './Icons';

interface TabelaProps {
  clientes: Client[];
  clientSelected?: (cliente: Client) => void;
  clientExcluded?: (cliente: Client) => void;
}

export default function Table(props: TabelaProps) {
  const actions = props.clientExcluded || props.clientSelected;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {actions ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.name}</td>
          <td className="text-left p-4">{cliente.age}</td>
          {actions ? renderAction(cliente) : false}
        </tr>
      );
    });
  }

  function renderAction(cliente: Client) {
    return (
      <td className="flex justify-center">
        {props.clientSelected ? (
          <button
            onClick={() => props.clientSelected?.(cliente)}
            className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.clientExcluded ? (
          <button
            onClick={() => props.clientExcluded?.(cliente)}
            className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}
          >
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}

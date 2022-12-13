import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
  const Clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 23, '2'),
    new Client('Carlos', 55, '3'),
    new Client('Daniel', 18, '4'),
    new Client('Gui', 40, '5'),
  ];

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        <Table clients={Clients}></Table>
      </Layout>
    </div>
  );
}

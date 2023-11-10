'use client'
import React, { useState } from 'react';
import { Client, ClientStatus } from './types/Client';
import dynamic from 'next/dynamic';
const ClientList = dynamic(() => import('../../components/ClientList'));

const HomePage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const handleStatusChange = (id: number, newStatus: ClientStatus) => {
    const clientData = localStorage.getItem("clients");
    const clients: Client[] = clientData ? JSON.parse(clientData) : [];
    const updatedClients = clients.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    localStorage.setItem("clients", JSON.stringify(updatedClients));
    setClients(updatedClients);
  };

  const getClients = () => {
    const clients = localStorage.getItem("clients");
    return clients ? JSON.parse(clients) : [];
  }

  React.useEffect(() => {
    setClients(getClients());
  }, []);

  const handleDelete = (id: number) => {
    const clientsData = localStorage.getItem("clients");
    if (clientsData) {
      const clients: Client[] = JSON.parse(clientsData);
      const indexToDelete = clients.findIndex(client => client.id === id);
      if (indexToDelete !== -1) {
        const updatedClients = [...clients.slice(0, indexToDelete), ...clients.slice(indexToDelete + 1)];
        localStorage.setItem("clients", JSON.stringify(updatedClients));
        setClients(updatedClients);
        console.log(`Client with id ${id} deleted successfully.`);
      } else {
        console.log(`Client with id ${id} not found.`);
      }
    }
  };



  return (
    <div>
      <ClientList clients={clients} onStatusChange={handleStatusChange} handleDelete={handleDelete} />
    </div>
  );
};

export default HomePage;

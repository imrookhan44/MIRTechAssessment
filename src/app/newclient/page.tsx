'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const ClientForm = dynamic(() => import('../../../components/ClientForm'));
import { Client } from '../types/Client';

const NewClientPage: React.FC = () => {
  const handleAddClient = (newClient: Client) => {
    const clients = JSON.parse(localStorage.getItem("clients") || "[]");
    clients.push(newClient);
    localStorage.setItem("clients", JSON.stringify(clients));
    console.log('New client:', newClient);
  };

  return (
    <div>
      <ClientForm onAddClient={handleAddClient} />
    </div>
  );
};

export default NewClientPage;

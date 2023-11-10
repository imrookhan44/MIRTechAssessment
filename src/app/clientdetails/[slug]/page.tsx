// pages/clients/[id].tsx
"use client";
import React from "react";
import { useRouter } from "next/router";
import { Client } from "../../types/Client";
import dynamic from "next/dynamic";
const ClientDetails = dynamic(() => import("../../../../components/ClientDetails"))
const ClientDetailsPage: React.FC = ({ params }: any) => {
  const { slug } = params;
  let id = parseInt(slug);
  console.log("test dat1111", id);
  const clientData = localStorage.getItem("clients");
  const clients: Client[] = clientData ? JSON.parse(clientData) : [];
  console.log(clients);
  const client: Client | undefined = clients.find((c: Client) => c.id === id);

  if (!client) {
    return <div>Client not found.</div>;
  }

  return (
    <div>
      <ClientDetails client={client} />
    </div>
  );
};

export default ClientDetailsPage;

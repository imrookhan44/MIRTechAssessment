"use client";
import React from "react";
import { Client } from "../src/app/types/Client";

interface ClientDetailsProps {
  client: Client;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <img
          src={client.avatar}
          alt="Profile Picture"
          className="mx-auto w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
          {client.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-700 font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">{client.contactInformation}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold mb-2">Organization</h3>
            <p className="text-gray-600">{client.organization}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-700 font-semibold mb-2">status</h3>
            <p
              className={`text-white ${client.status === "active" ? "bg-green-400" : "bg-red-600"
                } w-20 p-2 rounded`}
            >
              {client.status}
            </p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold mb-2">Id</h3>
            <p className="text-gray-700 font-semibold mb-2">{client.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;

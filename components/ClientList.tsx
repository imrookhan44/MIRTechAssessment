"use client";
import React, { useState, useEffect } from "react";
import { Client, ClientStatus, filterByDate } from "../src/app/types/Client";
import Link from "next/link";

interface ClientListProps {
  clients: Client[];
  onStatusChange: (id: number, newStatus: ClientStatus) => void;
  handleDelete: (id: number) => void;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onStatusChange, handleDelete }) => {
  const [statusFilter, setStatusFilter] = useState<ClientStatus>("inactive");
  const [filterByDate, setFilterByDate] = useState<filterByDate>("all");
  const filteredClients = statusFilter === "inactive" ? clients
    : clients.filter((client) => client.status === statusFilter);
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="flex items-center justify-end">
                <div className="flex justify-end items-center mx-auto">
                  <div>
                    <p>
                      Filter By Status:
                    </p>
                  </div>
                  <div>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as ClientStatus)}
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end items-center mx-auto">
                  <div>
                    <p>
                      Filter By Creation Date:
                    </p>
                  </div>
                  <div>
                    <select
                      value={filterByDate}
                      onChange={(e) => setFilterByDate(e.target.value as filterByDate)}
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="all">All</option>
                      <option value="today">Today</option>
                      <option value="yesterday">Yesterday</option>
                    </select>
                  </div>
                </div>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      change status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredClients.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <Link href={`/clientdetails/${client.id}`}>
                              <p className="text-sm font-medium text-gray-900 hover:text-indigo-500">
                                {client.name}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${client.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            }`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() =>
                            onStatusChange(
                              client.id,
                              client.status === "active" ? "inactive" : "active"
                            )
                          }
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Toggle Status
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <p onClick={() => handleDelete(client.id)} className="text-red-600 cursor-pointer hover:text-red-900">
                          Delete
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientList;

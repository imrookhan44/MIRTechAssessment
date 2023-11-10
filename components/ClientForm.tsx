"use client";
import React, { useState } from "react";
import { Client, ClientStatus } from "../src/app/types/Client";
import { useRouter } from "next/navigation";
interface ClientFormProps {
  onAddClient: (newClient: Client) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ onAddClient }) => {
  const router = useRouter();
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const todayDate = `${currentYear}/${currentMonth}/${currentDate}`
  const [newClient, setNewClient] = useState<Client>({
    id: generateId(),
    name: "",
    contactInformation: "",
    organization: "",
    assignedUser: "",
    avatar: "",
    status: "inactive",
    date: todayDate
  });

  function generateId() {
    return Math.floor(Math.random() * 1000000);
  }

  const handleAddClient = () => {
    onAddClient(newClient);
    router.push('/')
    setNewClient({
      id: newClient?.id,
      name: "",
      contactInformation: "",
      organization: "",
      assignedUser: "",
      avatar: "",
      status: "inactive",
      date: newClient?.date
    });
  };

  const handleAvatarChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const imageBase64 = e.target.result as string;
        setNewClient({ ...newClient, avatar: imageBase64 });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center mt-4">
      <div className="w-full md:w-1/2 px-10 py-2 shadow border-2">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newClient.name}
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="contactInformation"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Information
            </label>
            <input
              type="number"
              id="contactInformation"
              name="contactInformation"
              value={newClient.contactInformation}
              onChange={(e) =>
                setNewClient({
                  ...newClient,
                  contactInformation: e.target.value,
                })
              }
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="organization"
              className="block text-gray-700 font-bold mb-2"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={newClient.organization}
              onChange={(e) =>
                setNewClient({ ...newClient, organization: e.target.value })
              }
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="assignedUser"
              className="block text-gray-700 font-bold mb-2"
            >
              Assigned User
            </label>
            <input
              type="text"
              id="assignedUser"
              name="assignedUser"
              value={newClient.assignedUser}
              onChange={(e) =>
                setNewClient({ ...newClient, assignedUser: e.target.value })
              }
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="avatar"
              className="block text-gray-700 font-bold mb-2"
            >
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              name="avatar"
              onChange={handleAvatarChange}
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAddClient}
              className="bg-blue-500 text-white   px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;

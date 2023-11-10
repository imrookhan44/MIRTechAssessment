
export type ClientStatus = 'active' | 'inactive';
export type filterByDate = 'all' | 'today' | 'yesterday'
export interface Client {
  id: number;
  name: string;
  contactInformation: string;
  organization: string;
  assignedUser: string;
  avatar: string;
  status: ClientStatus;
  date: string
}

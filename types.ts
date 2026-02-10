
export enum OrbState {
  IDLE = 'IDLE',
  SYNCING = 'SYNCING',
  ACTIVE = 'ACTIVE',
  OFFLINE = 'OFFLINE',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SaleRecord {
  id: string;
  timestamp: string;
  items: string;
  total: number;
  status: 'synced' | 'pending';
}

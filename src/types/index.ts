export interface SongRequest {
  id?: string;
  name: string;
  artist: string;
  remarks: string;
  created: Date | any; // Firestore timestamp
}

export interface HistoricalRequest {
  id?: string;
  name: string;
  artist: string;
  count: number;
  created: Date | any;
  updated: Date | any;
}

export interface Message {
  id?: string;
  from: string;
  message: string;
  created: Date | any;
}

export interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ComponentType<any>;
}

export interface PageConfig {
  title: string;
  description?: string;
}

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error' | 'warning';

export interface RequestState {
  status: RequestStatus;
  message: string;
}

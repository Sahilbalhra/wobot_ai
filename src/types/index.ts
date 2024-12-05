export interface Health {
  cloud: string;
  device: string;
  _id: string;
  id: string;
}

export interface Camera {
  name: string;
  location: string;
  recorder: string;
  tasks: string;
  status: "Active" | "Inactive";
  _id: string;
  id: number;
  current_status: string;
  health: Health;
  hasWarning: boolean;
}

export interface ApiResponse {
  status: number;
  message: string;
  data: Camera[];
}

export interface PreviewPicture {
  url: string;
  width: number;
  height: number;
  file: File;
  isNew: boolean;
}

export interface ConnectionStatus {
  action: string;
  connected: boolean;
  request_received: boolean;
  request_sent: boolean;
}
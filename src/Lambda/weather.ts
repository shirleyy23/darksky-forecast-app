import axios from 'axios';

interface APIResponse {
  statusCode: number;
  body: string;
}

export async function handler(event: any): Promise<APIResponse> {
  const data = JSON.parse(event.body);
}

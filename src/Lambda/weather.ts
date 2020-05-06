import axios from 'axios';

interface APIResponse {
  statusCode: number;
  body: string;
}

export async function handler(event: any): Promise<APIResponse> {
  const data = JSON.parse(event.body);

  const { latitude, longitude } = data;

  const { API_PATH, API_KEY } = process.env;

  const url = `${API_PATH}${API_KEY}/${latitude}, ${longitude}/?units=si`;
}

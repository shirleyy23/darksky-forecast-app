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

  try {
    const response = await axios.get(url, {
      headers: { Accept: 'application/json' },
    });
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
}

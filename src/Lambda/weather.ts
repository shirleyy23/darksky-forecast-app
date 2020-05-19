import axios from 'axios';
import { APIResponse } from '../types';

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

    const { latitude, longitude, timezone } = data;
    const {
      summary,
      icon,
      precipProbability,
      temperature,
      windSpeed,
      uvIndex,
    } = data.currently;

    const formattedData = {
      latitude,
      longitude,
      timezone,
      data: {
        summary,
        icon,
        precipProbability,
        temperature,
        windSpeed,
        uvIndex,
      },
    };

    return {
      statusCode: 200,
      body: JSON.stringify(formattedData),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
}

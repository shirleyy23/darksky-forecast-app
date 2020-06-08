export default {
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        latitude: '23',
        longitude: '23',
        timezone: 'Toronto/Americas',
        data: {
          summary: 'Cloudy',
          icon: 'sun',
          precipProbability: 0.2,
          temperature: 25.3,
          windSpeed: 4.99,
          uvIndex: 3,
          hourly: [{ temperature: 0, date: 0 }],
          daily: [{ temperature: 0, date: 0 }],
        },
      },
    })
  ),
};

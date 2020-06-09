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
          hourly: [
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
            { temperature: 20.84, date: 1509993277 },
          ],
          daily: [
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
            { temperature: 30.84, date: 1509991200 },
          ],
        },
      },
    })
  ),
};

import React from 'react';
import { render, fireEvent } from '../../../Store/Test/test-utils';
import App from '../../../App';
import axios from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<Forecast /> UI renders correctly based on API state', () => {});

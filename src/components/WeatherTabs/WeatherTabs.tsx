import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import CustomTabPanel from './CustomTabPanel';
import WeatherTabInfo from './WeatherTabInfo';
import { TabValueState, DateTypes } from '../../types';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';

const mapState = (state: RootState): Location => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

class WeatherTabs extends React.Component<Props, TabValueState> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state: TabValueState = {
    value: 0,
  };

  a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange(event: React.ChangeEvent<{}>, newValue: number): void {
    this.setState((state) => ({
      value: newValue,
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        <AppBar position="static" color="secondary">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Hourly" {...this.a11yProps(0)} />
            <Tab label="Weekly" {...this.a11yProps(1)} />
          </Tabs>
        </AppBar>
        <CustomTabPanel value={this.state.value} index={0}>
          {this.props.data.hourly.map((data, i) => (
            <WeatherTabInfo
              key={`hourly-tab-${i}`}
              temperature={data.temperature}
              date={data.date}
              dateType={DateTypes.hourly}
            />
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={this.state.value} index={1}>
          {this.props.data.daily.map((data, i) => (
            <WeatherTabInfo
              key={`daily-tab-${i}`}
              temperature={data.temperature}
              date={data.date}
              dateType={DateTypes.daily}
            />
          ))}
        </CustomTabPanel>
      </div>
    );
  }
}

export default connector(WeatherTabs);

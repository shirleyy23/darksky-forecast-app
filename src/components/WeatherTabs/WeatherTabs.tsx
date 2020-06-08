import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import CustomTabPanel from './CustomTabPanel';
import WeatherTabInfo from './WeatherTabInfo';
import { TabValueState } from '../../types';

class WeatherTabs extends React.Component<{}, TabValueState> {
  constructor(props: {}) {
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
        <CustomTabPanel value={this.state.value} index={0} />
        <CustomTabPanel value={this.state.value} index={1} />
      </div>
    );
  }
}

export default WeatherTabs;

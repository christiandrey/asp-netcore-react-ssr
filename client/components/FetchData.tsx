import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

type WeatherForecastProps = RouteComponentProps<{ startDateIndex: string }>; // ... plus incoming routing parameters

export default class FetchData extends React.Component<WeatherForecastProps, {}> {
  componentWillMount() {}

  componentWillReceiveProps(nextProps: WeatherForecastProps) {}

  public render() {
    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        {this.renderForecastsTable()}
        {this.renderPagination()}
      </div>
    );
  }

  private renderForecastsTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }

  private renderPagination() {
    return (
      <p>
        <Link to={`/fetchdata/${1}`}>Previous</Link>
        <Link to={`/fetchdata/${2}`}>Next</Link>
      </p>
    );
  }
}

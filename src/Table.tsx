import React from "react";
import { Worker } from "./Worker";
import { Flight } from "./Flights";
import { FlightData } from "./FlightData";

interface IProps {}

class Table extends React.Component<
  IProps,
  {
    workers: [];
    flights: [" "];
    flightData: {
      plane: string;
      duration: number;
      from_gate: string;
      to_gate: string;
    };
  }
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      workers: [],
      flights: [" "],
      flightData: { plane: " ", duration: 0, from_gate: " ", to_gate: " " },
    };
    this.setFlights = this.setFlights.bind(this);
    this.setFlightData = this.setFlightData.bind(this);
  }

  componentDidMount() {
    fetch("https://interview-mock.herokuapp.com/api/workers")
      .then((response) => response.json())
      .then((workersNames) => {
        this.setFlights(workersNames[0].id);
        this.setState({ workers: workersNames });
      });
  }

  setFlights(index: any) {
    fetch("https://interview-mock.herokuapp.com/api/workers/" + index)
      .then((response) => response.json())
      .then((response) => {
        this.setFlightData(response[0]);
        this.setState({ flights: response });
      });
  }
  setFlightData(flight: any) {
    this.setState({
      flightData: {
        plane: flight.plane,
        duration: flight.duration,
        from_gate: flight.from_gate,
        to_gate: flight.to_gate,
      },
    });
  }

  render() {
    return (
      <div className="Main_table">
        <div className="Worker">
          <div className="workers_header">
            <h4 className="workers_title">Workers</h4>
          </div>
          {this.state.workers.map((worker: any) => (
            <div  key={worker.id} onClick={() => {this.setFlights(worker.id);}}>
              <Worker name={worker.name} />
            </div>
          ))}
        </div>
        <div className="Flights">
          <div className="Flight_meni">
            <h5 className="Menu_item">Flight number</h5>
            <h5 className="Menu_item">From</h5>
            <h5 className="Menu_item">To</h5>
            <h5 className="Menu_item">From date</h5>
            <h5 className="Menu_item">To date</h5>
          </div>

          {this.state.flights.map((flight: any) => (
            <div key={flight.num} onClick={() => this.setFlightData(flight)}>
              {" "}
              <Flight
                num={flight.num}
                from={flight.from}
                to={flight.to}
                from_date={flight.from_date}
                to_date={flight.to_date}
              />
            </div>
          ))}
        </div>
        <div className="Flight_data">
          <div>
            <FlightData
              plane={this.state.flightData.plane}
              duration={this.state.flightData.duration}
              from_gate={this.state.flightData.from_gate}
              to_gate={this.state.flightData.to_gate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Table;

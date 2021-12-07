import React from "react";

interface IProps {
    plane:string,
    duration: number,
    from_gate: string,
    to_gate: string
}
class FlightData extends React.Component<IProps,{hours:any,minutes:number,time:any}> {
  constructor(props:IProps) {
    super(props);
    this.state={
        hours: 0,
        minutes: 0,
        time: "no data"   
    }
  }

  render() {
    return (
      <div>
        <h4 className="data_item">Plane number: {this.props.plane}</h4>
        <h4 className="data_item">Duration: {Math.floor(this.props.duration / 60)}h {this.props.duration % 60}m</h4>
        <h4 className="data_item">Origin gate: {this.props.from_gate}</h4>
        <h4 className="data_item">Destination gate: {this.props.to_gate}</h4>
      </div>
    );
  }
}

export { FlightData };
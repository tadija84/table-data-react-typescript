import React from "react";

interface IProps {
    num:number,
    from: string,
    to: string,
    from_date: string,
    to_date: string
}

class Flight extends React.Component<IProps> {
  constructor(props:IProps) {
    super(props);
  }

  render() {
    return (
      <div className="display_flight">
          <p className="display_item"> {this.props.num}</p>
          <p className="display_item">{this.props.from}</p>
          <p className="display_item">{this.props.to}</p>
          <p className="display_item">{this.props.from_date}</p>
          <p className="display_item">{this.props.to_date}</p>  
      </div>
    );
  }
}

export { Flight };
import React from "react";

interface IProps {
    name:string
}

class Worker extends React.Component <IProps>{
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="workers_name">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export { Worker };
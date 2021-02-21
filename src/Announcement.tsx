import React from 'react';
import './Announcement.css';

interface IProps {
}

interface IState {
  text: String;
}

class Announcement extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      text: "Our Church honors all possible COVID-19 precautions for your safety."
    }
  }

  render() {
    return (
      <div className="Announcement">
        <div className="Announcement--content">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default Announcement;

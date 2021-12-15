import React from 'react';

import {
  ControlCard
} from '@gbraad/crc-react-components';
import '@gbraad/crc-react-components/dist/index.css';

export default class MiniStatusWindow extends React.Component {
  constructor(props) {
    super(props);

    this.control = React.createRef();
  }

  componentDidMount() {
    window.api.onStatusChanged(async (event, status) => {
      this.control.current.updateStatus(status);
    })
  }

  onStart() {
    window.api.startInstance({})
  }

  onStop() {
    window.api.stopInstance({})
  }

  onDelete() {
    window.api.deleteInstance({})
  }

  render() {
    return (
        <ControlCard ref={this.control}
          onStartClicked={this.onStart}
          onStopClicked={this.onStop}
          onDeleteClicked={this.onDelete} />
    );
  }
}
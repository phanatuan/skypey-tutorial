import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { state } from "./static-data";
import _ from "lodash";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = state;
  }

  setActiveUserId = activeUserId => () => {
    this.setState({
      activeUserId: activeUserId,
      typing: ""
    });
  };

  handleMessageInput = e => {
    this.setState({
      typing: e.target.value
    });
  };

  handleSubmitMessage = id => () => {
    this.setState(prev => {
      let newObjectAdd = {
        [_.size(prev.messages[id])]: {
          number: _.size(prev.messages[id]),
          text: prev.typing,
          is_user_msg: true
        }
      };
      return {
        messages: {
          ...prev.messages,
          [id]: {
            ...prev.messages[id],
            ...newObjectAdd
          }
        },
        typing: ""
      };
    });
  };

  render() {
    const { contacts, messages, user, activeUserId, typing } = this.state;
    const messageByActiveUserId = messages[activeUserId];
    const contactInfoByActiveUserId = contacts[activeUserId];

    return (
      <div className='App'>
        <Sidebar
          contacts={contacts}
          messages={messages}
          setActiveUserId={this.setActiveUserId}
        />
        <Main
          user={user}
          activeUserId={activeUserId}
          messageByActiveUserId={messageByActiveUserId}
          handleMessageInput={this.handleMessageInput}
          handleSubmitMessage={this.handleSubmitMessage}
          typing={typing}
          contactInfoByActiveUserId= {contactInfoByActiveUserId}
        />
      </div>
    );
  }
}

export default App;

import React, { Fragment } from 'react';

import Person from './components/person';
import ChatHistory from './components/chatHistory';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">Chat Room</h1>
        <ChatHistory />
        <Person username={'Tom'} />
        <Person username={'John'} />
      </div>

    );
  }
}




// function App() {
//   return (
//     <Fragment>
//       <h1>Chat Room</h1>
//       <ChatHistory />
//       <Person username={'Tom'} />
//       <Person username={'John'} />
//     </Fragment>

//   );
// }


export default App;
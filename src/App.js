import React, { Fragment } from 'react';

import Person from './components/person';
import ChatHistory from './components/chatHistory';


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Chat Room</h1>
        <ChatHistory />
        <Person username={'Tom'} />
        <Person username={'John'} />
      </Fragment>

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
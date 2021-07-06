import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './ToDo';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);













// text example rect
// const name = prompt('enter your name');

// function shit(name) {
//   if(name === 'Jena') {
//     return name + ' hate you';
//   } else {
//     return name;
//   }
// };

// const element = ( <h1>Hello {shit(name)}! My name is Sergej. 
//               Glad to see you!</h1> );

// ReactDOM.render(
//   element, document.getElementById('root')
// );



// time rect
// function tick() {
//   const elem = ( 
//     <div>
//       <h1>Hello Date!</h1>
//       <h2>Now is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(elem, document.getElementById('root'));
// }

// function Clock(props) {
//   return ( 
//     <div>
//       <h1>Hello Date!</h1>
//       <h2>Now is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// new clock



// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timer = setInterval(
//       () => this.tick(), 1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div className='timer-block'>
//         <h2 className='timer-block_timer'>The real time is: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }

// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );



// component(props) rect
// class AddP extends React.Component {
//     render() {
//         return <h2>Hey you, {this.props.phrase}</h2>
//       }
//     }
    
    // function AddP(props) {
    //   return <h2>Hey you, {props.phrase}</h2>;
    // }

    // function App() {
    //   return (
    //     <div>
    //     <AddP phrase="idi dalei"/>
    //     <AddP phrase="idi pobach"/>
    //     <AddP phrase="idi szadu"/>
    //     </div>
    //   );
    // }

    // const elem = <AddP phrase="idi dalei"/>;
    
    // ReactDOM.render(<App />, document.getElementById('root'));



// извлечение компонентов

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user = {props.author}/>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.author.avatarUrl}
//       alt={props.author.name}
//     />
//   )
// }

// function UserInfo(props) {
//   return(<div className="UserInfo">
//     <Avatar user = {props.user}/>
//      <div className="UserInfo-name">
//       {props.author.name}
//     </div>
//   </div>
//   )
// }


import React, { Component } from "react";
// import React, { useState } from 'react';
import "./App.css";
// import Radium, {StyleRoot} from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "NA001", name: "Kavil Shah", age: 23 },
      { id: "NA002", name: "Poojan Gujarati", age: 22 },
      { id: "NA003", name: "Yash Khatsuriya", age: 23 },
      { id: "NA004", name: "Hardil Undavia", age: 22 },
    ],
    showPerson: false,
  };

  nameChnageHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color:'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // ':hover':{    // Work only on if radium is install
      //   backgroundColor:'pink', 
      //   color:'black'
      // }
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed= {(event)=> this.nameChnageHandler(event,person.id)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor:'lightred', 
      //   color:'black'
      // }
    }
    // let classes = ['red','bold'].join(' ');  First way
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //['red','bold']
    }
    return (
      <div className="App">
        <h1>Hello, I'm React</h1>
        <p className={classes.join(' ')}>Work Properly</p>
        {/* <button style={styles} onClick={() => this.swithcNameHandler('Monik Makwana')}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, I\'m React!!!'))
}

// export default Radium(App);
export default App;

// const App = props =>{
//   const [personState, setPersonState] = useState(
//     {persons :[
//       {name : 'Kavil Shah',age:23},
//       {name : 'Poojan Gujarati', age:22},
//       {name : 'Yash Khatsuriya',age:23},
//       {name : 'Hardil Undavia', age:22},
//     ]}
//   )
//   const swithcNameHandler = () =>{
//     // console.log('was clicked');
//     // DON'T DO THIS this.state.persons[0].name ='Monik';
//     setPersonState({
//        persons :[
//       {name : 'Kavil Shah',age:32},
//       {name : 'Poojan Gujarati', age:22},
//       {name : 'Yash Khatsuriya',age:32},
//       {name : 'Hardil Undavia', age:22},
//     ]
//     })
//   }
//     return (
//       <div className="App">
//         <h1>Hello, I'm React</h1>
//         <p>Work Properly</p>
//         <button onClick={swithcNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobby is coding.</Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//         <Person name={personState.persons[3].name} age={personState.persons[3].age}/>
//       </div>
//     );
//   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, I\'m React!!!'))
// }

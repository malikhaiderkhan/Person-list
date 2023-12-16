import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {

  const people = [
    {
      img:24,
      name:'john',
      job:'developer'
    },
    {
      img:32,
      name:'david',
      job:'artist'
    },
    {
      img:27,
      name:'shawn',
      job:'designer'
    }
  ]

  return <section>
    <Person person={people[0]} />;
    <Person person={people[1]}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Person>
    ;
    <Person person={people[2]} />;
  </section>;
}

const Person = (props) => {
  const { img, name, job } = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
   <div className='person'>
    <img src={url} alt="" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>
  )
}

export default App;

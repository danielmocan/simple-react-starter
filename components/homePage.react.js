import React, { Component } from 'react';
import Question from './common/question.react.js';

const questionsData = [
  {
    question: "Care este capitala Frantei",
    ans1: ["China", false],
    ans2: ["japolanda", false],
    ans3: ["Paris", true],
    ans4: ["test4", false]
  },
  {
    question: "Care este capitala Chinei",
    ans1: ["China", true],
    ans2: ["japolanda", false],
    ans3: ["Paris", false],
    ans4: ["test4", false]
  },
  {
    question: "Care este capitala Spaniei",
    ans1: ["China", false],
    ans2: ["japolanda", false],
    ans3: ["Paris", false],
    ans4: ["Madrid", true]
  }
];

class HomePage extends React.Component {
    render( ) {
        const questions = questionsData.map( ( item, index ) => {
          console.log( item, index );
          return <Question item={ item } key={ index } />;
        });
        return (
            <div>
                <h1>This is HomePage</h1>
                <p>Some Bla Bla text</p>
                { questions }
            </div>
        );
    }
}

export default HomePage;

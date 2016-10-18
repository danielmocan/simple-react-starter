import React from 'react';

const Question = ( props ) => {
  const { question, ans1, ans2, ans3, ans4 } = props.item;
  return (
    <div>
      <h3>{ question }</h3>
      <div class="radio">
        <label><input type="radio" name="optradio" />{ ans1[0] }</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optradio" />{ ans2[0] }</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optradio" />{ ans3[0] }</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optradio" />{ ans4[0] }</label>
      </div>
    </div>
  );
};

export default Question;

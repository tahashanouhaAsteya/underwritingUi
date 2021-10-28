import React, { useState } from 'react';

const App = () => {
  const [values, setValues] = useState<Record<string, any>>({});

  const submit = () => {
    console.log('submitted', values);
  };

  const onFieldChange = (name: string, value: any, touch = false) => {
    //let errorsTemp = Object.assign({}, errors);
    let valuesTemp = Object.assign({}, values);
    valuesTemp[name] = value;
    //let touchedTemp = Object.assign({}, touched);
    setValues(valuesTemp);
  };

  return (
    <div className={'mainContainer'}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <div className={'question'}>
          <label>
            Question One
            <input
              name="questionOne"
              type="text"
              value={values['questionOne']}
              onChange={(v) => onFieldChange('questionOne', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Question Two
            <input
              name="questionTwo"
              type="text"
              value={values['questionTwo']}
              onChange={(v) => onFieldChange('questionTwo', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Question Three
            <input
              name="questionThree"
              type="text"
              value={values['questionThree']}
              onChange={(v) => onFieldChange('questionThree', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Question Four
            <input
              name="questionFour"
              type="text"
              value={values['questionFour']}
              onChange={(v) => onFieldChange('questionFour', v.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default App;

import React, { useState } from 'react';

const App = () => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [simulationValues, setSimulationValues] = useState<Record<string, any>>(
    {},
  );

  const submit = () => {
    console.log('submitted', values);
  };

  const submitSimulation = () => {
    console.log('submitted Simulation', simulationValues);
  };

  const onFieldChange = (name: string, value: any, touch = false) => {
    //let errorsTemp = Object.assign({}, errors);
    let valuesTemp = Object.assign({}, values);
    valuesTemp[name] = value;
    //let touchedTemp = Object.assign({}, touched);
    setValues(valuesTemp);
  };

  const onSimulationFieldChange = (name: string, value: any, touch = false) => {
    //let errorsTemp = Object.assign({}, errors);
    let valuesTemp = Object.assign({}, simulationValues);
    valuesTemp[name] = value;
    //let touchedTemp = Object.assign({}, touched);
    setSimulationValues(valuesTemp);
  };

  return (
    <div className={'mainContainer'}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        style={{ maxWidth: '350px' }}
      >
        <h1>Data Entry</h1>
        <div className={'question'}>
          <label>
            What is your first Name?
            <input
              name='FirstName'
              type='text'
              value={values['FirstName']}
              onChange={(v) => onFieldChange('FirstName', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your middle name?
            <input
              name='MiddleName'
              type='text'
              value={values['MiddleName']}
              onChange={(v) => onFieldChange('MiddleName', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your last name?
            <input
              name='LastName'
              type='text'
              value={values['LastName']}
              onChange={(v) => onFieldChange('LastName', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your Gender?
            <select
              name='Gender'
              value={values['Gender']}
              onChange={(v) => onFieldChange('Gender', v.target.value)}
            >
              <option value='other'>other</option>
              <option value='female'>female</option>
              <option value='male'>male</option>
            </select>
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your Date Of Birth
            <input
              name='DateOfBirth'
              type='text'
              value={values['DateOfBirth']}
              onChange={(v) => onFieldChange('DateOfBirth', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is the Resident Address Zip
            <input
              name='ResidentAddressZip'
              type='text'
              value={values['ResidentAddressZip']}
              onChange={(v) =>
                onFieldChange('ResidentAddressZip', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Are you Employed?
            <input
              name='Employed'
              type='text'
              value={values['Employed']}
              onChange={(v) => onFieldChange('Employed', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Worked For Min Days And Hours?
            <input
              name='WorkedForMinDaysAndHours'
              type='text'
              value={values['WorkedForMinDaysAndHours']}
              onChange={(v) =>
                onFieldChange('WorkedForMinDaysAndHours', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is your Weekly Work Hours
            <input
              name='WeeklyWorkHours'
              type='text'
              value={values['WeeklyWorkHours']}
              onChange={(v) => onFieldChange('WeeklyWorkHours', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Occupation Class
            <input
              name='OccupationClass'
              type='text'
              value={values['OccupationClass']}
              onChange={(v) => onFieldChange('OccupationClass', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Body Mass Index
            <input
              name='BodyMassIndex'
              type='text'
              value={values['BodyMassIndex']}
              onChange={(v) => onFieldChange('BodyMassIndex', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage
            <input
              name='IllegalDrugsUsage'
              type='text'
              value={values['IllegalDrugsUsage']}
              onChange={(v) =>
                onFieldChange('IllegalDrugsUsage', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage Type
            <input
              name='IllegalDrugsUsageType'
              type='text'
              value={values['IllegalDrugsUsageType']}
              onChange={(v) =>
                onFieldChange('IllegalDrugsUsageType', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage Frequency
            <input
              name='IllegalDrugsUsageFrequency'
              type='text'
              value={values['IllegalDrugsUsageFrequency']}
              onChange={(v) =>
                onFieldChange('IllegalDrugsUsageFrequency', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage Last Use
            <input
              name='IllegalDrugsUsageLastUse'
              type='text'
              value={values['IllegalDrugsUsageLastUse']}
              onChange={(v) =>
                onFieldChange('IllegalDrugsUsageLastUse', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Criminal Charges
            <input
              name='CriminalCharges'
              type='text'
              value={values['CriminalCharges']}
              onChange={(v) => onFieldChange('CriminalCharges', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Criminal Charges
            <input
              name='CriminalCharges'
              type='text'
              value={values['CriminalCharges']}
              onChange={(v) => onFieldChange('CriminalCharges', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Bankruptcy
            <input
              name='Bankruptcy'
              type='text'
              value={values['Bankruptcy']}
              onChange={(v) => onFieldChange('Bankruptcy', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the BankruptcyCause Cause
            <input
              name='BankruptcyCause'
              type='text'
              value={values['BankruptcyCause']}
              onChange={(v) => onFieldChange('BankruptcyCause', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Bankruptcy Discharge
            <input
              name='BankruptcyDischarge'
              type='text'
              value={values['BankruptcyDischarge']}
              onChange={(v) =>
                onFieldChange('BankruptcyDischarge', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Bankruptcy Discharge Date
            <input
              name='BankruptcyDischargeDate'
              type='text'
              value={values['BankruptcyDischargeDate']}
              onChange={(v) =>
                onFieldChange('BankruptcyDischargeDate', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Decision Type
            <input
              name='DecisionType'
              type='text'
              value={values['DecisionType']}
              onChange={(v) => onFieldChange('DecisionType', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Decision Value
            <input
              name='DecisionValue'
              type='text'
              value={values['DecisionValue']}
              onChange={(v) => onFieldChange('DecisionValue', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Final Decision
            <input
              name='FinalDecision'
              type='text'
              value={values['FinalDecision']}
              onChange={(v) => onFieldChange('FinalDecision', v.target.value)}
            />
          </label>
        </div>
        <input type='submit' value='Submit' />
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitSimulation();
        }}
        style={{ maxWidth: '350px' }}
      >
        <h1>Simulate</h1>
        <div className={'question'}>
          <label>
            What is your first Name?
            <input
              name='FirstName'
              type='text'
              value={simulationValues['FirstName']}
              onChange={(v) => onSimulationFieldChange('FirstName', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your middle name?
            <input
              name='MiddleName'
              type='text'
              value={simulationValues['MiddleName']}
              onChange={(v) => onSimulationFieldChange('MiddleName', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your last name?
            <input
              name='LastName'
              type='text'
              value={simulationValues['LastName']}
              onChange={(v) => onSimulationFieldChange('LastName', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your Gender?
            <select
              name='Gender'
              value={simulationValues['Gender']}
              onChange={(v) => onSimulationFieldChange('Gender', v.target.value)}
            >
              <option value='other'>other</option>
              <option value='female'>female</option>
              <option value='male'>male</option>
            </select>
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is your Date Of Birth
            <input
              name='DateOfBirth'
              type='text'
              value={simulationValues['DateOfBirth']}
              onChange={(v) => onSimulationFieldChange('DateOfBirth', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            What is the Resident Address Zip
            <input
              name='ResidentAddressZip'
              type='text'
              value={simulationValues['ResidentAddressZip']}
              onChange={(v) =>
                onSimulationFieldChange('ResidentAddressZip', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Are you Employed?
            <input
              name='Employed'
              type='text'
              value={simulationValues['Employed']}
              onChange={(v) => onSimulationFieldChange('Employed', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            Worked For Min Days And Hours?
            <input
              name='WorkedForMinDaysAndHours'
              type='text'
              value={simulationValues['WorkedForMinDaysAndHours']}
              onChange={(v) =>
                onSimulationFieldChange('WorkedForMinDaysAndHours', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is your Weekly Work Hours
            <input
              name='WeeklyWorkHours'
              type='text'
              value={simulationValues['WeeklyWorkHours']}
              onChange={(v) => onSimulationFieldChange('WeeklyWorkHours', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Occupation Class
            <input
              name='OccupationClass'
              type='text'
              value={simulationValues['OccupationClass']}
              onChange={(v) => onSimulationFieldChange('OccupationClass', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Body Mass Index
            <input
              name='BodyMassIndex'
              type='text'
              value={simulationValues['BodyMassIndex']}
              onChange={(v) => onSimulationFieldChange('BodyMassIndex', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage
            <input
              name='IllegalDrugsUsage'
              type='text'
              value={simulationValues['IllegalDrugsUsage']}
              onChange={(v) =>
                onSimulationFieldChange('IllegalDrugsUsage', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage Type
            <input
              name='IllegalDrugsUsageType'
              type='text'
              value={simulationValues['IllegalDrugsUsageType']}
              onChange={(v) =>
                onSimulationFieldChange('IllegalDrugsUsageType', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage Frequency
            <input
              name='IllegalDrugsUsageFrequency'
              type='text'
              value={simulationValues['IllegalDrugsUsageFrequency']}
              onChange={(v) =>
                onSimulationFieldChange('IllegalDrugsUsageFrequency', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Illegal Drugs Usage Last Use
            <input
              name='IllegalDrugsUsageLastUse'
              type='text'
              value={simulationValues['IllegalDrugsUsageLastUse']}
              onChange={(v) =>
                onSimulationFieldChange('IllegalDrugsUsageLastUse', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Criminal Charges
            <input
              name='CriminalCharges'
              type='text'
              value={simulationValues['CriminalCharges']}
              onChange={(v) => onSimulationFieldChange('CriminalCharges', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Criminal Charges
            <input
              name='CriminalCharges'
              type='text'
              value={simulationValues['CriminalCharges']}
              onChange={(v) => onSimulationFieldChange('CriminalCharges', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Bankruptcy
            <input
              name='Bankruptcy'
              type='text'
              value={simulationValues['Bankruptcy']}
              onChange={(v) => onSimulationFieldChange('Bankruptcy', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the BankruptcyCause Cause
            <input
              name='BankruptcyCause'
              type='text'
              value={simulationValues['BankruptcyCause']}
              onChange={(v) => onSimulationFieldChange('BankruptcyCause', v.target.value)}
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Bankruptcy Discharge
            <input
              name='BankruptcyDischarge'
              type='text'
              value={simulationValues['BankruptcyDischarge']}
              onChange={(v) =>
                onSimulationFieldChange('BankruptcyDischarge', v.target.value)
              }
            />
          </label>
        </div>
        <div className={'question'}>
          <label>
            what is the Bankruptcy Discharge Date
            <input
              name='BankruptcyDischargeDate'
              type='text'
              value={simulationValues['BankruptcyDischargeDate']}
              onChange={(v) =>
                onSimulationFieldChange('BankruptcyDischargeDate', v.target.value)
              }
            />
          </label>
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
export default App;

import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import { RadioButton, RadioButtonGroup } from '../components/RadioButton';
import MoneyInput from '../components/MoneyInput';
import NumericIME from '../components/NumericIME';
import DatePicker from '../components/DatePicker';

const getToday = () => {
  const now = new Date();
  return {
    year: `${now.getFullYear()}`,
    month: `${now.getMonth() + 1}`.padStart(2, '0'),
    date: `${now.getDate()}`.padStart(2, '0')
  };
};

const AddPage = () => {
  const [billingType, setBillingType] = useState('expenditure');
  const handleBillintTypeChange = e => setBillingType(e.target.value);

  const [moneyValue, setMoneyValue] = useState('');

  const today = useMemo(() => getToday(), []);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [date, setDate] = useState(
    `${today.year}-${today.month}-${today.date}`
  );
  const handleDatePickerUpdate = date => setDate(date);

  const history = useHistory();

  return (
    <Layout>
      <Heading onBackClick={() => history.replace('/')} title="记账" />
      <div className="container">
        <RadioButtonGroup>
          <RadioButton
            name="billingType"
            value="expenditure"
            onChange={handleBillintTypeChange}
            checked={billingType === 'expenditure'}
          >
            支出
          </RadioButton>
          <RadioButton
            name="billingType"
            value="income"
            onChange={handleBillintTypeChange}
            checked={billingType === 'income'}
          >
            收入
          </RadioButton>
          <RadioButton
            name="billingType"
            value="transfer"
            onChange={handleBillintTypeChange}
            checked={billingType === 'transfer'}
          >
            转账
          </RadioButton>
        </RadioButtonGroup>
        <MoneyInput value={moneyValue} />
        <button onClick={() => setShowDateTimePicker(p => !p)}>picker</button>
        <p>date: {date}</p>
      </div>
      <NumericIME onChange={setMoneyValue} show={true} />
      {showDateTimePicker && (
        <DatePicker
          today={today}
          onChange={handleDatePickerUpdate}
          onExit={() => setShowDateTimePicker(false)}
        />
      )}
    </Layout>
  );
};

export default AddPage;

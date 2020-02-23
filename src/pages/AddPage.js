import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import { RadioButton, RadioButtonGroup } from '../components/RadioButton';
import MoneyInput from '../components/MoneyInput';
import DateInput from '../components/DateInput';
import Note from '../components/Note';
import NumericIME from '../components/NumericIME';

import styles from './AddPage.module.scss';

const getToday = () => {
  const date = new Date();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const AddPage = () => {
  const [billingType, setBillingType] = useState('expenditure');
  const handleBillintTypeChange = e => setBillingType(e.target.value);

  const [moneyValue, setMoneyValue] = useState('');

  const today = useMemo(() => getToday(), []);
  const [date, setDate] = useState(today);
  console.log(date);

  const [note, setNote] = useState('');

  const [numericIMEShow, setNumericIMEShow] = useState(true);

  const history = useHistory();

  return (
    <Layout hideTabs>
      <Heading onBackClick={() => history.replace('/')} title="记账" />
      <div className="container">
        <div className={styles.infoBar}>
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
          <DateInput value={today} onChange={d => setDate(d)} />
        </div>
        <MoneyInput value={moneyValue} />
      </div>
      <Note
        value={note}
        onChange={e => setNote(e.target.value)}
        onActiveChange={active => setNumericIMEShow(!active)}
      />
      <NumericIME onChange={setMoneyValue} show={numericIMEShow} />
    </Layout>
  );
};

export default AddPage;

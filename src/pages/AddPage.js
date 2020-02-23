import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import { RadioButton, RadioButtonGroup } from '../components/RadioButton';
import MoneyInput from '../components/MoneyInput';
import DateInput from '../components/DateInput';
import CategoryButtonGroup from '../components/CategoryButtonGroup';
import {
  faShoppingCart,
  faUtensils,
  faHome,
  faBus,
  faCapsules,
  faBaby,
  faBook,
  faDice,
  faPaw,
  faClipboardList,
  faHandshake,
  faMoneyCheckAlt,
  faGem,
  faCommentDollar
} from '@fortawesome/free-solid-svg-icons';
import Note from '../components/Note';
import NumericIME from '../components/NumericIME';

import styles from './AddPage.module.scss';

const getToday = () => {
  const date = new Date();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const mockDataExpenditureCategories = [
  { id: 1, icon: faShoppingCart, name: '购物' },
  { id: 2, icon: faUtensils, name: '餐饮' },
  { id: 3, icon: faHome, name: '住房' },
  { id: 4, icon: faBus, name: '交通' },
  { id: 5, icon: faCapsules, name: '医疗' },
  { id: 6, icon: faBaby, name: '亲子' },
  { id: 7, icon: faBook, name: '学习' },
  { id: 8, icon: faDice, name: '娱乐' },
  { id: 9, icon: faPaw, name: '宠物' },
  { id: 10, icon: faClipboardList, name: '其他' }
];

const mockDataIncomeCategories = [
  { id: 1, icon: faMoneyCheckAlt, name: '工资' },
  { id: 2, icon: faGem, name: '奖金' },
  { id: 3, icon: faHandshake, name: '生意' },
  { id: 4, icon: faCommentDollar, name: '其他' }
];

const AddPage = () => {
  const [billingType, setBillingType] = useState('expenditure');
  const handleBillintTypeChange = e => setBillingType(e.target.value);

  const [moneyValue, setMoneyValue] = useState('');

  const today = useMemo(() => getToday(), []);
  const [date, setDate] = useState(today);
  console.log(date);

  const [expenditureCategoryId, setExpenditureCategoryId] = useState(
    mockDataExpenditureCategories[0].id
  );

  const [incomeCategoryId, setIncomeCategoryId] = useState(
    mockDataIncomeCategories[0].id
  );

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
      {billingType === 'expenditure' && (
        <CategoryButtonGroup
          categoryId={expenditureCategoryId}
          categories={mockDataExpenditureCategories}
          onChange={id => setExpenditureCategoryId(id)}
        />
      )}
      {billingType === 'income' && (
        <CategoryButtonGroup
          categoryId={incomeCategoryId}
          categories={mockDataIncomeCategories}
          onChange={id => setIncomeCategoryId(id)}
        />
      )}
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

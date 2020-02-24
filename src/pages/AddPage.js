import React, { useState, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import RadioButtonGroup from '../components/RadioButtonGroup';
import MoneyInput from '../components/MoneyInput';
import DateInput from '../components/DateInput';
import CategoryButtonGroup from '../components/CategoryButtonGroup';
import AccountList from '../components/AccountList';
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
  faCommentDollar,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Note from '../components/Note';
import NumericIME from '../components/NumericIME';
import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { store } from '../store';

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
  const billingType = useInput('expenditure');
  const [moneyValue, setMoneyValue] = useState('');
  const today = useMemo(() => getToday(), []);
  const date = useInput(today);
  const expenditureCategoryId = useInput(mockDataExpenditureCategories[0].id);
  const incomeCategoryId = useInput(mockDataIncomeCategories[0].id);
  const note = useInput('');
  const [numericIMEShow, setNumericIMEShow] = useState(true);

  const {
    state: { accounts }
  } = useContext(store);
  const [showAccounts, setShowAccounts] = useState(false);
  const [account, setAccount] = useState(accounts?.[0]);
  const handleAccountClick = id => {
    setShowAccounts(false);
    setAccount(accounts.find(acc => acc.id === id));
  };

  const history = useHistory();

  return (
    <Layout hideTabs>
      <Heading
        title="记账"
        start={
          <Heading.Icon
            icon={faArrowLeft}
            onClick={() => history.replace('/')}
          />
        }
      />
      <div className={classnames('container', styles.container)}>
        <div className={styles.infoBar}>
          <RadioButtonGroup
            {...billingType}
            data={[
              { value: 'expenditure', text: '支出' },
              { value: 'income', text: '收入' },
              { value: 'transfer', text: '转账' }
            ]}
          />
          <DateInput {...date} />
        </div>

        <MoneyInput value={moneyValue} />

        {showAccounts && accounts.length !== 0 && (
          <AccountList
            accounts={accounts}
            fullScreen
            onClick={handleAccountClick}
          />
        )}
        <div className={styles.accountBtnWrapper}>
          <Button
            className={classnames(styles.accountBtn)}
            primary
            disabled={!account}
            onClick={() => setShowAccounts(true)}
          >
            {account?.name ?? '无账户'}
          </Button>
        </div>
      </div>

      {billingType.value === 'expenditure' && (
        <CategoryButtonGroup
          categories={mockDataExpenditureCategories}
          {...expenditureCategoryId}
        />
      )}
      {billingType.value === 'income' && (
        <CategoryButtonGroup
          categories={mockDataIncomeCategories}
          {...incomeCategoryId}
        />
      )}
      <Note
        className={styles.note}
        {...note}
        onActiveChange={active => setNumericIMEShow(!active)}
      />
      <NumericIME onChange={setMoneyValue} show={numericIMEShow} />
    </Layout>
  );
};

export default AddPage;

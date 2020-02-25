import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import RadioButtonGroup from '../components/RadioButtonGroup';
import MoneyInput from '../components/MoneyInput';
import DateInput from '../components/DateInput';
import CategoryButtonGroup from '../components/CategoryButtonGroup';
import AccountList from '../components/AccountList';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Note from '../components/Note';
import NumericIME from '../components/NumericIME';
import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { store } from '../store';
import { BillingTypeCategoriesContext } from '../context/BillingTypeCategoriesContext';

import styles from './AddPage.module.scss';

const getToday = () => {
  const date = new Date();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const useBillingType = initialCategoryId => {
  const billingType = useInput('expenditure');

  const billingTypeCategories = useContext(BillingTypeCategoriesContext);

  // filter categories by billingType
  const categories = useMemo(
    () => billingTypeCategories.filter(c => c.type === billingType.value),
    [billingTypeCategories, billingType]
  );

  const categoryFirstId = categories?.[0]?.id;

  const [categoryId, setCategoryId] = useState(initialCategoryId);

  // when billingType changed, reselect categoryId
  useEffect(() => {
    if (categories.find(c => c.id === categoryId)) {
      // when user select a categoryId
      setCategoryId(categoryId);
    } else if (categories.find(c => c.id === initialCategoryId)) {
      // when user switch billingType and
      // initialCategoryId is in current categories
      // use the initialCategoryId
      setCategoryId(initialCategoryId);
    } else {
      // last default choice
      setCategoryId(categoryFirstId);
    }
  }, [billingType, categories]);

  return {
    billingType,
    categories,
    categoryId: {
      value: categoryId,
      onChange: e => setCategoryId(e.target.value)
    }
  };
};

const AddPage = () => {
  const { billingType, categories, categoryId } = useBillingType();
  const [moneyValue, setMoneyValue] = useState('');
  const today = useMemo(() => getToday(), []);
  const date = useInput(today);
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

      <CategoryButtonGroup categories={categories} {...categoryId} />

      <Note
        className={styles.note}
        {...note}
        onActiveChange={active => setNumericIMEShow(!active)}
      />

      <NumericIME
        initialValue={moneyValue}
        onChange={setMoneyValue}
        show={numericIMEShow}
      />
    </Layout>
  );
};

export default AddPage;

import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import { ListCard, ListCardItem } from '../components/ListCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faYenSign,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPage.module.scss';

const mockDataAccounts = [
  {
    id: 1,
    type: 'cash',
    name: '现金',
    balance: 200
  },
  {
    id: 2,
    type: 'cash',
    name: '储蓄0086',
    balance: 200
  },
  {
    id: 3,
    type: 'cash',
    name: '储蓄2788',
    balance: 2000
  },
  {
    id: 4,
    type: 'creditCard',
    name: '招商银行1123',
    balance: -5000
  },
  {
    id: 5,
    type: 'creditCard',
    name: '招商银行外币',
    balance: -100
  }
];

const AddAccount = () => {
  const handleAddAccount = () => {
    alert('add');
  };

  return (
    <div className={styles.addAccountWrapper} onClick={handleAddAccount}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

const AccountPage = () => {
  const history = useHistory();
  return (
    <Layout>
      <Heading
        onBackClick={() => history.replace('/')}
        title="账户"
        end={<AddAccount />}
      />
      <ListCard start="现金">
        {mockDataAccounts
          ?.filter(acc => acc.type === 'cash')
          .map(acc => (
            <ListCardItem
              key={acc.id}
              icon={faYenSign}
              title={acc.name}
              expenditure={acc.balance}
            />
          ))}
      </ListCard>
      <ListCard start="信用卡">
        {mockDataAccounts
          ?.filter(acc => acc.type === 'creditCard')
          .map(acc => (
            <ListCardItem
              key={acc.id}
              icon={faCreditCard}
              title={acc.name}
              expenditure={acc.balance}
            />
          ))}
      </ListCard>
    </Layout>
  );
};

export default AccountPage;

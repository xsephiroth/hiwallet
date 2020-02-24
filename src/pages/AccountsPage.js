import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { store } from '../store';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import { ListCard, ListCardItem } from '../components/ListCard';
import {
  faPlus,
  faYenSign,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountsPage.module.scss';

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
  },
  {
    id: 6,
    type: 'investment',
    name: '黄金',
    balance: 12345
  }
];

const AccountPage = () => {
  const history = useHistory();
  const {
    state: { accounts }
  } = useContext(store);
  return (
    <Layout>
      <Heading
        title="账户"
        start={
          <Heading.Icon
            icon={faArrowLeft}
            onClick={() => history.replace('/')}
          />
        }
        end={
          <Heading.Icon
            icon={faPlus}
            onClick={() => history.replace('/accounts/create')}
          />
        }
      />
      <div className={styles.listContainer}>
        <ListCard start="现金">
          {accounts
            ?.filter(acc => acc.type === 'cash')
            .map(acc => (
              <ListCardItem
                key={acc.id}
                icon={faYenSign}
                title={acc.name}
                expenditure={acc.balance}
                onClick={() => history.push(`/accounts/${acc.id}`)}
              />
            ))}
        </ListCard>
        <ListCard start="信用卡">
          {accounts
            ?.filter(acc => acc.type === 'creditCard')
            .map(acc => (
              <ListCardItem
                key={acc.id}
                icon={faCreditCard}
                title={acc.name}
                expenditure={acc.balance}
                onClick={() => history.push(`/accounts/${acc.id}`)}
              />
            ))}
        </ListCard>

        <ListCard start="投资">
          {accounts
            ?.filter(acc => acc.type === 'investment')
            .map(acc => (
              <ListCardItem
                key={acc.id}
                icon={faCreditCard}
                title={acc.name}
                expenditure={acc.balance}
                onClick={() => history.push(`/accounts/${acc.id}`)}
              />
            ))}
        </ListCard>
      </div>
    </Layout>
  );
};

export default AccountPage;

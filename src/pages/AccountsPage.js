import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { store } from '../store';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import AccountList from '../components/AccountList';
import styles from './AccountsPage.module.scss';

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
        <AccountList
          accounts={accounts}
          onClick={id => history.push(`/accounts/${id}`)}
        />
      </div>
    </Layout>
  );
};

export default AccountPage;

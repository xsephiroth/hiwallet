import React from 'react';
import classnames from 'classnames';
import { faYenSign, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { ListCard, ListCardItem } from '../ListCard';
import './AccountList.scss';

const AccountList = ({ accounts, onClick, fullScreen }) => {
  const cashAccounts = accounts.filter(acc => acc.type === 'cash');
  const creditCardAccounts = accounts.filter(acc => acc.type === 'creditCard');
  const investmentAccounts = accounts.filter(acc => acc.type === 'investment');

  return (
    <div className={classnames('account-list', { fullScreen })}>
      <ListCard start="现金">
        {cashAccounts.map(acc => (
          <ListCardItem
            key={acc.id}
            icon={faYenSign}
            title={acc.name}
            expenditure={acc.balance}
            onClick={() => onClick?.(acc.id)}
          />
        ))}
      </ListCard>

      <ListCard start="信用卡">
        {creditCardAccounts.map(acc => (
          <ListCardItem
            key={acc.id}
            icon={faCreditCard}
            title={acc.name}
            expenditure={acc.balance}
            onClick={() => onClick?.(acc.id)}
          />
        ))}
      </ListCard>

      <ListCard start="投资">
        {investmentAccounts.map(acc => (
          <ListCardItem
            key={acc.id}
            icon={faCreditCard}
            title={acc.name}
            expenditure={acc.balance}
            onClick={() => onClick?.(acc.id)}
          />
        ))}
      </ListCard>
    </div>
  );
};

export default AccountList;

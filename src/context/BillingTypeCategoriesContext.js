import React, { createContext } from 'react';
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

const initialValue = [
  { id: 1, type: 'expenditure', icon: faShoppingCart, name: '购物' },
  { id: 2, type: 'expenditure', icon: faUtensils, name: '餐饮' },
  { id: 3, type: 'expenditure', icon: faHome, name: '住房' },
  { id: 4, type: 'expenditure', icon: faBus, name: '交通' },
  { id: 5, type: 'expenditure', icon: faCapsules, name: '医疗' },
  { id: 6, type: 'expenditure', icon: faBaby, name: '亲子' },
  { id: 7, type: 'expenditure', icon: faBook, name: '学习' },
  { id: 8, type: 'expenditure', icon: faDice, name: '娱乐' },
  { id: 9, type: 'expenditure', icon: faPaw, name: '宠物' },
  { id: 10, type: 'expenditure', icon: faClipboardList, name: '其他' },
  { id: 11, type: 'income', icon: faMoneyCheckAlt, name: '工资' },
  { id: 12, type: 'income', icon: faGem, name: '奖金' },
  { id: 13, type: 'income', icon: faHandshake, name: '生意' },
  { id: 14, type: 'income', icon: faCommentDollar, name: '其他' }
];

const BillingTypeCategoriesContext = createContext();

const BillingTypeCategoriesProvider = ({ children }) => (
  <BillingTypeCategoriesContext.Provider value={initialValue}>
    {children}
  </BillingTypeCategoriesContext.Provider>
);

export { BillingTypeCategoriesContext, BillingTypeCategoriesProvider };

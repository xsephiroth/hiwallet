import React from 'react';
import Heading from '../components/Heading';
import InfoCard from '../components/InfoCard';
import bgImg from '../assets/bg.jpg';
import List from '../components/List';
import Layout from '../components/Layout';

import {
  faHome,
  faShoppingCart,
  faTshirt,
  faUtensils,
  faYenSign,
  faDice,
  faLaptop,
  faCar
} from '@fortawesome/free-solid-svg-icons';

const mockData = [
  {
    id: '1',
    title: '房贷',
    subtext: '02-13 20:30 ',
    icon: faHome,
    expenditure: 10000
  },
  {
    id: '2',
    title: '利息',
    subtext: '02-13 22:30',
    icon: faYenSign,
    income: 2000
  },
  {
    id: '2.1',
    title: '买菜',
    subtext: '02-14 11:30 芹菜 西兰花 生菜 虾 蟹5斤 生蚝200只',
    icon: faUtensils,
    expenditure: 829.7
  },

  {
    id: '3',
    title: '服饰美容',
    subtext: '02-13 20:30 Michale Kors',
    icon: faTshirt,
    expenditure: 3580
  },
  {
    id: '4',
    title: '餐饮',
    subtext: '02-11 22:30 下午茶',
    icon: faUtensils,
    expenditure: 210
  },
  {
    id: '5',
    title: '娱乐',
    subtext: '02-10 20:30 麻将',
    icon: faDice,
    expenditure: 800
  },
  {
    id: '6',
    title: '生活用品',
    subtext: '02-10 20:30 宝宝',
    icon: faShoppingCart,
    expenditure: 792.85
  },
  {
    id: '7',
    title: '电子数码',
    subtext: '02-06 20:30 IPhone 11',
    icon: faLaptop,
    expenditure: 6000
  },
  {
    id: '8',
    title: '车辆',
    subtext: '02-01 12:30 保险, 送油卡',
    icon: faCar,
    expenditure: 5000
  },
  {
    id: '9',
    title: '生活用品',
    subtext: '02-13 20:30 膳魔师',
    icon: faShoppingCart,
    expenditure: 140.74
  },
  {
    id: '10',
    title: '娱乐',
    subtext: '02-10 20:30 麻将',
    icon: faDice,
    income: 20
  }
];

const HomePage = () => {
  const hideNavigationTabs = false;

  return (
    <Layout hideTabs={hideNavigationTabs}>
      <Heading title="今日" />
      <InfoCard bg={bgImg}>
        <p>2月支出</p>
        <h1 className="primary">12345.67</h1>
        <p>收入12345.67</p>
      </InfoCard>
      <List hideTabs={hideNavigationTabs} data={mockData} />
    </Layout>
  );
};

export default HomePage;

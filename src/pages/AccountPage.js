import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { store } from '../store';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';
import useInput from '../hooks/useInput';
import './AccountPage.scss';

const AddAccountPage = ({ match }) => {
  const {
    state: { accounts },
    dispatch
  } = useContext(store);

  const id = match.params.id;
  const isCreateNew = id === 'create';
  const account = isCreateNew ? {} : accounts.find(acc => acc.id === +id) ?? {};

  const name = useInput(account?.name ?? '');
  const type = useInput(account?.type ?? 'cash');
  const remark = useInput(account?.remark ?? '');
  const balance = useInput(account?.balance ?? 0);

  const history = useHistory();
  const backToAccountsPage = () => history.replace('/accounts');

  const handleAddAccount = async () => {
    // TODO
    const mock = {
      id: Math.random() * 100,
      name: name.value,
      type: type.value,
      remark: remark.value,
      balance: +balance.value || 0
    };
    dispatch({ type: 'ADD_ACCOUNT', payload: mock });
    backToAccountsPage();
    return;

    try {
      const res = await axios.post('/accounts', {
        name: name.value,
        type: type.value,
        remark: remark.value
      });
      dispatch({ type: 'ADD_ACCOUNT', payload: res.data });
    } catch (e) {
      console.error(e?.message);
    }
  };

  return (
    <Layout hideTabs>
      <Heading title="添加账户" />
      <div className="container addAccountPage">
        <form>
          <FormGroup>
            <input type="text" placeholder="名称" {...name} />
          </FormGroup>
          <FormGroup>
            <select {...type}>
              <option value="cash">现金</option>
              <option value="creditCard">信用卡</option>
              <option value="investment">投资</option>
            </select>
          </FormGroup>
          <FormGroup label="初始余额">
            <input type="number" {...balance} />
          </FormGroup>
          <FormGroup>
            <textarea placeholder="备注" {...remark}></textarea>
          </FormGroup>
        </form>
        <div className="btnGroup">
          <Button primary block onClick={handleAddAccount}>
            添加
          </Button>
          <Button block onClick={backToAccountsPage}>
            取消
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddAccountPage;

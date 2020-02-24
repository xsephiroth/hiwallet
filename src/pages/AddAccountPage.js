import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';
import useInput from '../hooks/useInput';
import './AddAccountPage.scss';

const AddAccountPage = () => {
  const name = useInput('');
  const type = useInput('cash');
  const remark = useInput('');

  const history = useHistory();
  const handleAdd = () => {};
  const handleCancel = () => history.replace('/account');

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
          <FormGroup>
            <textarea placeholder="备注" {...remark}></textarea>
          </FormGroup>
        </form>
        <div className="btnGroup">
          <Button primary block onClick={handleAdd}>
            添加
          </Button>
          <Button block onClick={handleCancel}>
            取消
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddAccountPage;

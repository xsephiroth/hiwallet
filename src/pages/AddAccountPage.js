import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';
import './AddAccountPage.scss';

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value.trim());
  return {
    value,
    onChange
  };
};

const AddAccountPage = () => {
  const name = useInputValue('');
  const type = useInputValue('cash');
  const remark = useInputValue('');

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

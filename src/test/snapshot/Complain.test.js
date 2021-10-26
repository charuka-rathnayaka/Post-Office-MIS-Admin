import React from 'react';
import renderer from 'react-test-renderer';
import ComplainComponent from "../../components/Complain/complainComponent";

it('Complain Snapshot testing', () => {
    const data={
        complain:{
            name:"John",
            pid:"shbjshdbsjbsdjd",
            email:"john.gmail.com",
            contactNumber:"0745678894",
            date:"2021/10/20",
            message:"bjdsbjkdb kjdknks sdnkjdnkdn"
        },
        postOffice:1001
    };
    const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      )
  const tree = renderer.create(<ComplainComponent complain={data.complain} postOffice={data.postOffice}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
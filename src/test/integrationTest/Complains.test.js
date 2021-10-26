import React from "react";
import {configure,shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ComplainComponent from "../../components/Complain/complainComponent";
import Complains from "../../views/Complains/complains"
import * as redux from 'react-redux'
import {Provider} from 'react-redux'
import { mount} from 'enzyme'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk]);
configure ({adapter: new Adapter()})

describe("Complains",()=>{
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ username:'test' })
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Complains/>)
    })

    it ("should return Complain compoenent",()=>{

    })
})
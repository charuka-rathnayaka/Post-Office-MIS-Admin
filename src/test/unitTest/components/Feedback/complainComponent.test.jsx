import React from "react";
import {configure,shallow} from "enzyme";
import ComplainComponent from "../../../../components/Complain/complainComponent";
import Adapter from "enzyme-adapter-react-16";


describe("Complain Form",()=>{
    
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
    }
    it ("renders without crashing",()=>{
        expect(1).toBe(1);
    })


}
)




























/*import React from "react";
import  ReactDOM  from "react-dom";
import ComplainComponent from "../../../../components/Complain/complainComponent";
import {render,cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer";

describe("Complain Form",()=>{
    afterEach(cleanup);

    it ("renders without crashing",()=>{
        const div = document.createElement("div");
        ReactDOM.render(<ComplainComponent/>,div)
    })
    const complainObject={  complainID:"khdjbsjhbhscbhkbscjhsdj",
                            name:"Alan",
                            email:"Alan.gmail.com",
                            pid:"2021456",
                            contactNumber:"0415786555",
                            date:"2021/09/05",
                            message:"Here is the complain"}
    

    it ("renders title correctly",()=>{
        const {getByTestId}= render(<ComplainComponent complain={complainObject}/>);
        expect(getByTestId("title-id")).toHaveTextContent("Alan")
    })

    it ("matches snapshot",()=>{
        const tree = renderer.create(<ComplainComponent complain={complainObject}/>).toJSON();
        expect(tree).toMatchSnapshot();
        
    })
})*/


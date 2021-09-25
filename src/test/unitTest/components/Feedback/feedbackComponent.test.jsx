import React from "react";
import  ReactDOM  from "react-dom";
import FeedbackComponent from "../../../../components/Complain/complainComponent";
import {render,cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer";

describe("Feedback Form",()=>{
    afterEach(cleanup);

    it ("renders without crashing",()=>{
        const div = document.createElement("div");
        ReactDOM.render(<FeedbackComponent/>,div)
    })

    it ("renders title correctly",()=>{
        const {getByTestId}= render(<FeedbackComponent/>);
        expect(getByTestId("title-id")).toHaveTextContent("Title:-")
    })

    it ("matches snapshot",()=>{
        const tree = renderer.create(<FeedbackComponent/>).toJSON();
        expect(tree).toMatchSnapshot();
        
    })
})
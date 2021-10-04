/**
 * @jest-environment node
 */
import {auth} from "../../../auth/base.js";
import loginSaga from '../../../sagas/loginSaga';
import { testSaga } from 'redux-saga-test-plan';
import { call, put, take } from 'redux-saga/effects';

describe("Login Saga testing",()=>{
    it("should call getSnapShotFromUserAuth", () => {
        let userData = {
          user: {
            id: 1,
            name: "jon",
          },
        };
    
        let { user } = userData;
    
        jest
          .spyOn(auth, "signInWithEmailAndPassword")
          .mockImplementation(() => userData);
        const request = {
            data:{
                emailVal:"",
                passwordVal:""
            }
        }
        
        testSaga(loginSaga, request)
          .next()
          .put({ type: "LOGIN_SUCCESS" })
          .next()
        .isDone();
      });
})
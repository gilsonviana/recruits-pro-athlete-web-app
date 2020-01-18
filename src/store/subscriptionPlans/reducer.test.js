import reducer from "./reducer";
import * as types from "./types";

const initialState = [];

describe("Subscription plans", () => {
  it("should return initial state", () => {
    expect(reducer(initialState, {})).toEqual([...initialState]);
  });

  it("should set subscription plan", () => {
    expect(
      reducer(initialState, {
        type: types.SET_SUBSCRIPTION_PLANS,
        payload: [
          {
            plan_id: "123",
            name: "test plan"
          }
        ]
      })
    ).toEqual([
      ...initialState,
      {
        plan_id: "123",
        name: "test plan"
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.SET_SUBSCRIPTION_PLANS,
        payload: [
          {
            plan_id: "123",
            name: "test plan"
          }
        ]
      })
    ).toHaveLength(1);
  });
});

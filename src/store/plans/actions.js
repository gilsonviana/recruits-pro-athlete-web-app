import { SET_SUBSCRIPTION_PLANS } from "./types";

export const getSubscriptionPlans = () => {
  //TODO make http call to API
  return (dispatch) => {
    dispatch({
      type: SET_SUBSCRIPTION_PLANS,
      payload: [
        { plan_id: "P-72S11980A5042111UL2O6G4I", name: "Monthly" },
        { plan_id: "P-7PJ28516C52875803L2O6HRY", name: "Yearly" },
      ],
    });
  };
};

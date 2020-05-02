import { SET_SUBSCRIPTION_PLANS } from "./types";

export const getSubscriptionPlans = () => {
  //TODO make http call to API
  return (dispatch) => {
    dispatch({
      type: SET_SUBSCRIPTION_PLANS,
      payload: [
        { plan_id: "P-5RH556461F121723WL2WYCUA", name: "Monthly" },
        { plan_id: "P-87659893M77501912L2WYAZY", name: "Yearly" },
      ],
    });
  };
};

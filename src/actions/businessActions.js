import axios from "axios";

export const GetBusinessList = () => async (dispatch) => {
  try {
    dispatch({
      type: "BUSINESS_LIST_LOADING",
    });

    const res = await axios.get("https://smoothcommerce.tech/api.json");

    dispatch({
      type: "BUSINESS_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "BUSINESS_LIST_FAIL",
    });
  }
};

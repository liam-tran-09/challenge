const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const BusinessListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "BUSINESS_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "BUSINESS_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get business",
      };
    case "BUSINESS_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default BusinessListReducer;

const INITIAL_STATE = {
    name: "Zahide",
    email: "zahide.aksak@quickload.com",
    password: 12345,
};

export default (state = INITIAL_STATE, action:) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
            break;

        case "SET_EMAIL":
            return { ...state, email: action.payload };
            break;

        case "SET_PASSWORD":
            return { ...state, password: action.payload };
            break;

        default:
            break;
    }
};

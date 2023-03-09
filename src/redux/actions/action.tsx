export const SetName = (name: any) => {
    return {
        type: "SET_NAME",
        payload: name,
    };
};

export const SetEmail = (email: any) => {
    return {
        type: "SET_EMAIL",
        payload: email,
    };
};

export const SetPassword = (password: any) => {
    return {
        type: "SET_PASSWORD",
        payload: password,
    };
};

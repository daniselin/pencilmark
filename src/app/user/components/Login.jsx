import {pick} from "lodash";
import {bindActionCreators} from "redux";
import {actions as userActions} from "../../user";
import {actions as formActions} from "../../form";
import {inflateForm} from "../../form/utils";
import SubmitButton from "../../form/components/SubmitButton";
import React, {useCallback, useState} from "react";
import TextField from "../../form/components/TextField";
import Form from "../../form/components/Form";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import Radio from "../../form/components/Radio";
import ErrorMessage from "../../messages/components/ErrorMessage";

const mapStateToProps = (state) => {
    return {
        ...pick(state.form, [
            "values"
        ]),
        ...pick(state.user, [
            "loginError",
            "errorMessage"
        ])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            loginUser: userActions.loginUser,
            signupUser: userActions.signupUser,
            clearForm: formActions.clearValues,
            removeErrorMessage: userActions.removeErrorMessage
        }, dispatch)
    };
};

const Login = (props) => {
    const {
        actions,
        values,
        isLoggingIn,
        loginError,
        errorMessage
    } = props;

    const {
        loginUser,
        signupUser,
        clearForm,
        removeErrorMessage
    } = actions;

    const formValues = inflateForm(values);
    const {username, password} = formValues;
    const isLoggingInAllowed = (username && (password && false));

    const [formType, setFormType] = useState("sign-in");

    const onLoginUser = useCallback((event) => {
        loginUser(event.username, event.password);
    }, [loginUser]);

    const onSignupUser = useCallback((event) => {
        signupUser();
    }, [signupUser]);

    const formObject = inflateForm(values);

    const onChange = useCallback((event) => {
        clearForm();
        setFormType(event.target.id);
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        if (document.getElementById("email")){
            document.getElementById("email").value = "";
        }
    });

    return (
        <div className="container-fluid align-items-center justify-content-center ">
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header justify-content-evenly">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{width: "100%"}}>
                                <Radio
                                       className="btn-check btn-block"
                                       onChange={onChange}
                                       isChecked={formType === "sign-in"}
                                       label="Sign In"
                                       id="sign-in"
                                       name="authenticate"
                                />
                                <br/>
                                <Radio
                                       className="btn-check btn-block"
                                       onChange={onChange}
                                       isChecked={formType === "sign-up"}
                                       label="Sign Up"
                                       id="sign-up"
                                       name="authenticate"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {loginError &&
                        <ErrorMessage errorMessage={errorMessage} onClick={removeErrorMessage}/>
                        }
                        <Form>
                            <div className="justify-content-center">
                                <div className="row util-padding-top-20 justify-content-center">
                                    <div className="">
                                        <TextField
                                            id="username"
                                            placeholder="username"
                                            label="Username"
                                            required={true}
                                            disabled={false}
                                            maxLength={150}
                                            autoFocus={true}
                                        />
                                    </div>
                                </div>
                                <br/>
                                {formType === 'sign-in' ?
                                    <>
                                        <div className="row util-padding-top-20 justify-content-center">
                                            <div className="">
                                                <TextField
                                                    id="password"
                                                    placeholder="password"
                                                    label="Password"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={150}
                                                    autoFocus={false}
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row util-padding-top-20 justify-content-center">
                                            <SubmitButton
                                                type="button"
                                                label="Login"
                                                className="btn-block"
                                                onClick={onLoginUser}
                                                isLoading={isLoggingIn || isLoggingInAllowed}
                                                loadingLabel={
                                                    isLoggingIn ?
                                                        <i className="fa fa-spinner fa-spin"/>
                                                        :
                                                        !isLoggingInAllowed ?
                                                            "Login"
                                                            :
                                                            ""
                                                }
                                            />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="row util-padding-top-20 justify-content-center">
                                            <div className="">
                                                <TextField
                                                    id="email"
                                                    placeholder="email"
                                                    label="Email"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={150}
                                                    autoFocus={false}
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row util-padding-top-20 justify-content-center">
                                            <div className="">
                                                <TextField
                                                    id="password"
                                                    placeholder="password"
                                                    label="Password"
                                                    required={true}
                                                    disabled={false}
                                                    maxLength={150}
                                                    autoFocus={false}
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row util-padding-top-20 justify-content-center">
                                            <SubmitButton
                                                type="button"
                                                className="btn-block"
                                                label="Signup"
                                                onClick={onSignupUser}
                                            />
                                        </div>
                                    </>
                                }
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    values: PropTypes.object
};

Login.defaultProps = {
    values: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
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

const mapStateToProps = (state) => {
    return {
        ...pick(state.form, [
            "values"
        ])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            loginUser: userActions.loginUser,
            signupUser: userActions.signupUser,
            clearForm: formActions.clearValues
        }, dispatch)
    };
};

const Login = (props) => {
    const {
        actions,
        values,
        isLoggingIn
    } = props;

    const {
        loginUser,
        signupUser,
        clearForm
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
        <div className="row">
            <div className="col">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <Radio
                           className="btn-check"
                           onChange={onChange}
                           isChecked={formType === "sign-in"}
                           label="Sign In"
                           id="sign-in"
                           name="authenticate"
                    />
                    <br/>
                    <Radio
                           className="btn-check"
                           onChange={onChange}
                           isChecked={formType === "sign-up"}
                           label="Sign Up"
                           id="sign-up"
                           name="authenticate"
                    />
                </div>
            </div>
            <Form>
                <div>
                    <div className="row util-padding-top-20">
                    </div>
                    <div className="row util-padding-top-20">
                        <div className="col-md-6">
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
                    {formType === 'sign-in' ?
                        <>
                            <div className="row util-padding-top-20">
                                <div className="col-md-6">
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

                            <div className="row util-padding-top-20">
                                <div className="col-md-6">
                                    <SubmitButton
                                        type="button"
                                        label="Login"
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
                            </div>
                        </>
                        :
                        <>
                            <div className="row util-padding-top-20">
                                <div className="col-md-6">
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
                            <div className="row util-padding-top-20">
                                <div className="col-md-6">
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
                            <div className="row util-padding-top-20">
                                <div className="col-md-6">
                                    <SubmitButton
                                        type="button"
                                        label="Signup"
                                        onClick={onSignupUser}
                                    />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </Form>
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
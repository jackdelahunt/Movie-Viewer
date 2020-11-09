const { red } = require("@material-ui/core/colors");
const { useContext } = require("react");
const { Redirect } = require("react-router-dom");
const { AuthContext } = require("../../contexts/authContext")

const PrivateRoute = (props) => {
    const context = useContext(AuthContext);

    const {component:Component, ...rest} = props;

    return context.isAuthenticated === true ? (
        <Route {...rest} render={props => <Component {...props} />} />
    ) : (
        <Redirect 
            to={{
                pathname: "/login",
                state: { from: props.location }
            }}
        />
    );
}
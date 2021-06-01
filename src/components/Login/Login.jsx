import LoginForm from '../LoginForm/LoginForm'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()

    return (
        <div className="container">
            <h1>Finance Tracker</h1>
            <LoginForm />
        </div>
    )
}
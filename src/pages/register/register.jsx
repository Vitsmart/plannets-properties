import "./register.scss"
import { Link} from 'react-router-dom'

export const Register = () => {
  return (
    <div className='register'>
        <div className='card'>
        <div className='left'>
            <h1>Welcome to Plannets</h1>
            <p>lorem ipsum dolor</p>
        
        <span>Have account?</span>
        <Link to="/login">
        <button>Login</button>
        </Link>
    </div>
    <div className='right'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Register</button>
        </form>
    </div>
    </div>
    </div>
    
  )
}

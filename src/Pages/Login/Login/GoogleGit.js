import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const GoogleGit = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error :', error);
            });
    }

    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default GoogleGit;
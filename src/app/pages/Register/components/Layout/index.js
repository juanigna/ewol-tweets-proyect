import Card from '../../../../components/Card';
import LoadingOverlay from '../../../../components/loaders/LoadingOverlay';
import Logo from '../../../../components/Logo';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import useRegisterUser from '../hooks/useRegisterUser';
import RegisterForm from '../RegisterForm';
import './style.css';

const RegisterLayout = () => {
    const [loading, error, registerUser] = useRegisterUser();
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <div className="register-layout-container">
            <Logo width={isMobile ? 120 : 200} />
            <Card className="card">
                <LoadingOverlay visible={loading} />
                <span className="title">Bienvenidxs!</span>
                <span className="subtitle">Regístrate para poder twittear</span>
                {error && <span className="error-message">{error}</span>}
                <RegisterForm onSubmit={registerUser} />
            </Card>
        </div>
    );
};

export default RegisterLayout;

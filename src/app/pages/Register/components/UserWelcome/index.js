import Button from '../../../../components/Button';

const UserWelcome = ({ name, onLogout }) => {
    return (
        <div>
            <span>Bienvenido {name}</span>
            <Button onClick={onLogout}>Log Out</Button>
        </div>
    );
};

export default UserWelcome;

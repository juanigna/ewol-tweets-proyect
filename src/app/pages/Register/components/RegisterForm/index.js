import Button from '../../../../components/Button';
import InputText from '../../../../components/InputText';
import { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
    const [formValue, setFormValue] = useState({});

    const handleInputTextChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <InputText
                placeholder="Nombre"
                value={formValue.name}
                name="name"
                onChange={handleInputTextChange}
            />
            <InputText
                placeholder="Apellido"
                value={formValue.apellido}
                name="apellido"
                onChange={handleInputTextChange}
            />

            <Button onClick={() => onSubmit(formValue)}>Guardar</Button>
        </div>
    );
};

export default RegisterForm;

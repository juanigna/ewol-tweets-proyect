import Button from '../../../../components/Button';
import InputText from '../../../../components/InputText';
import { useState } from 'react';
import './style.css';
import InputImage from '../../../../components/InputImage';

const RegisterForm = ({ onSubmit }) => {
    const [formValue, setFormValue] = useState({});

    const handleInputChange = (newValue) => {
        setFormValue({
            ...formValue,
            ...newValue,
        });
    };
    return (
        <div className="form-container">
            <InputImage
                className="input-image"
                onChange={(imageBase64) =>
                    handleInputChange({ photo: imageBase64 })
                }
            />
            <InputText
                className="input-text-name"
                placeholder="Nombre"
                value={formValue.name}
                onChange={(e) => handleInputChange({ name: e.target.value })}
            />
            <Button className="save-data" onClick={() => onSubmit(formValue)}>
                Guardar
            </Button>
        </div>
    );
};
export default RegisterForm;

import { object, string, number, boolean } from 'yup';
import { IOrderForm } from '@/types';

interface ISchemaProps {
    peopleCountNums: {
        min: number;
        max: number;
    };
}

const validationSchema = (schemaProps: ISchemaProps) =>
    object().shape({
        name: string()
            .trim()
            .min(3, 'Name is too short, Min 3 chars')
            .max(50, 'Name is too long Max 50 chars')
            .required('Name is required'),
        phone: string()
            .required('Phone number is required')
            .length(10, '10 numbers required')
            .matches(/^[0-9]+$/, 'Invalid phone number'),
        peopleCount: number()
            .min(schemaProps.peopleCountNums.min, `Min peoples ${schemaProps.peopleCountNums.min}`)
            .max(schemaProps.peopleCountNums.max, `Max peoples ${schemaProps.peopleCountNums.max}`)
            .required('Required field'),
        isLegal: boolean().oneOf([true], 'Accepting Legal is required'),
    });

export default validationSchema;


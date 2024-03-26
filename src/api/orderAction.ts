'use server';
import { IOrderForm } from '@/types';

export default async function gameOrder(formData: IOrderForm) {
    console.log(formData);
    console.log(JSON.stringify(formData));

    try {
        const response = await fetch('http://localhost:3001/orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        return response.json();
    } catch (error) {
        return {
            message: 'Something went wrong',
        };
    }
}


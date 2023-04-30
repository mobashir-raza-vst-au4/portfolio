//define the interface for data as object
import axios from 'axios';

interface Data {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default async function sendMailHandler(data: Data) {

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch('/api/contact', options);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
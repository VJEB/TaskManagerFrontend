'use server';
import { taskSchema } from "@/models/task";
import { redirect } from 'next/navigation';

export async function create(prevState: unknown, formData: FormData) {
    const parsedData = taskSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!parsedData.success) {
        return parsedData.error.formErrors.fieldErrors;
    }

    try {
        const response = await fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parsedData.data), // Use parsedData.data here
        });

        if (!response.ok) {
            throw new Error(`Failed to create task: ${response.statusText}`);
        }

        redirect('/');
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}
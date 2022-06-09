import { AxiosError } from "axios";

import { IRequestResult } from "../../interfaces/IRequestResult";
import { Api } from "../axios-config/AxiosConfig";

interface IUserSignUp {
    name: string;
    password: string;
}

const signUp = async (user: IUserSignUp): Promise<IRequestResult> => {
    try {
        await Api.post('/sign-up', user);
        return { success: true };
    } catch (error) {
        const err = error as AxiosError;

        const result: IRequestResult = { messages: [], success: false };

        if (err.response?.data) {
            err.response.data.errors?.Password?.forEach((fieldError: string) => {
                result.messages?.push('Senha: ' + fieldError);
            });

            err.response.data.errors?.Name?.forEach((fieldError: string) => {
                result.messages?.push('Nome: ' + fieldError);
            });
            
        } else if (err.message === 'Network Error') {
            if (result.messages) {
                result.messages.push("Certifique-se de estar conectado na internet.");
            }

            return result;
        }

        return result;
    }
}

export const SignUpService = {
    signUp
};

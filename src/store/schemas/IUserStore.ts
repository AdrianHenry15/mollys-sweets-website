export interface IUserStore {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    validating: boolean;
    errors: any;
    status: string;
}

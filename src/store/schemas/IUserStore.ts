export interface IUserStore {
    firstName: string;
    lastName: string;
    email: string;
    validating: boolean;
    errors: any;
    status: string;
}

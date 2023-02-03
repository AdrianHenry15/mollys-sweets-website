export interface IUserActions {
    handleFirstNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLastNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

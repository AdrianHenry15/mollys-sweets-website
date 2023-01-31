export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    image_url: string;
    email: string;
    password: string;
    isAdmin: boolean;
    orders: [any];
    cart: [any];
    wishlist: [any];
}

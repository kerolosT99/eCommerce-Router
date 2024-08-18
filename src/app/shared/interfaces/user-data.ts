export interface UserData {
    message: string;
    user: User;
    token: string;
    
}

interface User {
    name: string;
    email: string;
    role: string;
}
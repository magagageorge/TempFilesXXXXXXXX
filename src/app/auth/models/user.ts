export class User {
    id: number;
    email: string;
    password: string;
    rememberMe: boolean;
    terms: boolean;
	username:string;
    confirmPassword: string;
    fullName: string;
    constructor(id?: number, email?: string, password?: string, rememberMe?: boolean, terms?: boolean, confirmPassword?: string, fullName?: string){
        this.id = id;
        this.email = email;
		this.username = email;
        this.password = password;
        this.rememberMe = rememberMe;
        this.terms = terms;
        this.confirmPassword = confirmPassword;
        this.fullName = fullName;
    }
}

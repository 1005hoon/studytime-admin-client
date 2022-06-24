import User from "../model/User";

class AuthService {
	users: User[];
	constructor() {
		this.users = [new User("1", "k", "tester", "tester@test.com", 1)];
	}

	async login() {
		return this.users[0];
	}

	async me(): Promise<User | null> {
		console.log("this runs?");
		return null;
		// return this.users[0];
	}

	async logout() {}
}

export default AuthService;

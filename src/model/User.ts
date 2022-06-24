export default class User {
	st_id: string;
	sns_type: string;
	nickname: string;
	email: string;
	is_admin: number;
	thumbnail: string | null;
	constructor(
		st_id: string,
		sns_type: string,
		nickname: string,
		email: string,
		is_admin: number,
		thumbnail?: string
	) {
		this.st_id = st_id;
		this.sns_type = sns_type;
		this.nickname = nickname;
		this.email = email;
		this.is_admin = is_admin;
		this.thumbnail = thumbnail || null;
	}
}

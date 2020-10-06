export class PostForm {
	id: number;
	message: string;
	upload_files: any[];
	visibility: string;
	date: string[];
	posted_by: string[];
	isNew: boolean;
	page_id: number;
	constructor() {
		this.message = '';
		this.isNew = true;
		this.visibility = 'Everyone';
		this.page_id = null;
	}
}

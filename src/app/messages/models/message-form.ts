export class MessageForm {
    id: number;
    message: string;
    upload_files: any[];
    isNew: boolean;
    constructor() {
        this.message = '';
        this.isNew = true;
    }

}
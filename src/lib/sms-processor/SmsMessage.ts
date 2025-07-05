export default class SmsMessage {
    recipients: string[];
    content: string;

    constructor(content: string, recipients: string[]) {
        this.content = content;
        this.recipients = recipients;
    }
}
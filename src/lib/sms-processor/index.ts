import { fail } from "assert";
import SmsMessage from "./SmsMessage";

class SmsProcessor {
    nextProcessor?: SmsProcessor;

    setNextProcessor(nextProcessor: SmsProcessor) {
        this.nextProcessor = nextProcessor;
    }
    
    sendSms(sms: SmsMessage){
        fail("Implement this function");
    };
}

export default SmsProcessor;
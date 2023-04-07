import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
  
@Injectable({
    providedIn: 'root',
})
export class MessageDialogService {  
    private subject = new Subject();  
  
    okThis(message: string, okFun: () => void): any {  
        this.setToOk(message, okFun);  
    }  
  
    setToOk(message: string, okFun: () => void): any {  
        const that = this;  
        this.subject.next({  
            type: 'ok',  
            text: message,  
            okFun(): any {  
                that.subject.next(null); // This will close the modal                    
                okFun();  
            } 
        });  
    }  
  
    getMessage(): Observable<any> {  
        return this.subject.asObservable();  
    }  
}  
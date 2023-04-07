import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
  
@Injectable({
    providedIn: 'root',
})
export class ConfirmDialogService {  
    private subject = new Subject();  
  
    confirmThis(message: string, confirmFun: () => void, cancelFun: () => void): any {  
        this.setConfirmation(message, confirmFun, cancelFun);  
    }  
  
    setConfirmation(message: string, confirmFun: () => void, cancelFun: () => void): any {  
        const that = this;  
        this.subject.next({  
            type: 'confirm',  
            text: message,  
            confirmFun(): any {  
                that.subject.next(null); // This will close the modal                    
                confirmFun();  
            },  
            cancelFun(): any {  
                that.subject.next(null);  
                cancelFun();
            }  
        });  
  
    }  
  
    getMessage(): Observable<any> {  
        return this.subject.asObservable();  
    }  
}  
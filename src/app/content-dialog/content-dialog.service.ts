import { Injectable, TemplateRef } from '@angular/core';    
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
  
@Injectable({
    providedIn: 'root',
})
export class ContentDialogService {  
    private subject = new Subject();  
  
    okThis(content: TemplateRef<any>, okFun: () => void): any {
        console.log("Inside OkThis");
        this.setToOk(content, okFun);  
    }  
  
    setToOk(content: TemplateRef<any>, okFun: () => void): any { 
        console.log("Inside setToOk");
        const that = this;  
        this.subject.next({  
            type: 'ok',
            text: content,   
            okFun(): any {  
                that.subject.next(null); // This will close the modal                    
                okFun();  
            } 
        });  
    }  
  
    getContent(): Observable<any> {  
        return this.subject.asObservable();  
    }  
}  
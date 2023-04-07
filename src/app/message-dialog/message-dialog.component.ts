import { Component, OnInit } from '@angular/core';  
import { MessageDialogService } from './message-dialog.service';   
  
@Component({  
    selector: 'app-message-dialog',  
    templateUrl: 'message-dialog.component.html',  
    styleUrls: ['message-dialog.component.css']  
})  
  
export class MessageDialogComponent implements OnInit {  
    message: any;  
    constructor(  
        private messageDialogService: MessageDialogService  
    ) { }  
  
    ngOnInit(): any {   
        this.messageDialogService.getMessage().subscribe(message => {  
            this.message = message;              
        });  
    }  
}  
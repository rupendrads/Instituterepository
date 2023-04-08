import { Component, OnInit, TemplateRef } from '@angular/core';  
import { ContentDialogService } from './content-dialog.service';   
  
@Component({  
    selector: 'app-content-dialog',  
    templateUrl: 'content-dialog.component.html',  
    styleUrls: ['content-dialog.component.css']  
})  
  
export class ContentDialogComponent implements OnInit {  
    content: any;  
    constructor(  
        private contentDialogService: ContentDialogService  
    ) { }  
  
    ngOnInit(): any {   
        console.log("In content dialog component");
        this.contentDialogService.getContent().subscribe(content => {
            console.log(content);
            this.content = content;            
        });
    }  
}  
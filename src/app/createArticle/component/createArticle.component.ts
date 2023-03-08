import { Store } from '@ngrx/store';
import { Component, OnInit } from "@angular/core";

@Component({
    selector:'mc-create-article',
    templateUrl:'./createArticle.component.html',
    styleUrls:['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit{

    constructor(private store: Store){}

    initialValues = {
        title: 'bar',
        description:'something',
        body:'body',
        tagList:['123']
    }

    ngOnInit(): void {
        
        
    }

    onSubmit(res: any): void{
        console.log('submitting' , res)
    }
    
}
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as jsPDF from 'jspdf';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    

    @ViewChild('content') content: ElementRef;
    public downloadPDF() {
    	let doc = new jsPDF();

    	let specialElementHandlers = {
    		'#editor': function(element, renderer){
    			return true;
    		}
    	};

    	let content = this.content.nativeElement;

    	doc.fromHTML(content.innerHTML, 15, 15, {
    		'width': 190,
    		'elementHandlers': specialElementHandlers
    	});
    	doc.save('save.pdf');
    }
}

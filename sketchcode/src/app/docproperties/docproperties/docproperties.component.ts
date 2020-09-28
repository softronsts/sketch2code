import { Component, OnInit, OnDestroy, ViewChildren, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';


@Component({
    selector: 'app-docproperties',
    templateUrl: './docproperties.component.html',
    styleUrls: ['./docproperties.component.scss']
})
export class DocpropertiesComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    bolTypes : BolTypes[]=[];
    selectedItem: BolTypes;

    shipmentReceiptIndicators : ShipmentReceiptIndicators[]=[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
    /*
    */
   this.bolTypes = [{ description: 'Ocean BL', code: 'OBL' }, { description: 'Seaway Bill', code: 'SWB'}];
   this.shipmentReceiptIndicators = [{ description: 'Received', code: 'R' }, { description: 'Shipped', code: 'S'}];

    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
    }

}


export interface BolTypes {
  code : string;
  description: string;
}

export interface ShipmentReceiptIndicators {
  code : string;
  description: string;
}

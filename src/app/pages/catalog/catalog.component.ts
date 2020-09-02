import { Component, OnInit } from '@angular/core';
import { Label } from 'carbon-components-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { JitEvaluator, BoundDirectivePropertyAst } from '@angular/compiler';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})


export class CatalogComponent implements OnInit {

  constructor() { }
  Modal() {
    alert("Registered");
  }
hk(value:string)
{
  
  window.confirm("sometext");
}
  ngOnInit()
   {
  }
  
    
}

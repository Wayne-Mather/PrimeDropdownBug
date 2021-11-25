import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  public myYes: boolean = true;
  public myNo: boolean = false;
  public left: string = 'Opt1';
  public right: string = 'Opt3';

  options: SelectItem[] = [
    {value: 'Opt1', label: 'Option 1'},
    {value: 'Opt2', label: 'Option 2'},
    {value: 'Opt3', label: 'Option 3', disabled: true},
    {value: 'Opt4', label: 'Option 4'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onChanged(dropdown: string, value: any) {
    console.log(dropdown, value);
  }
}

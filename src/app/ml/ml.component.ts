import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MlComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MlComponent implements ControlValueAccessor {

  @Input() Values: SelectItem[] = [];
  @Input() HasLabel: boolean = false;
  @Input() MyLabel: string = 'dropdown';
  @Input() CanEdit: boolean = false;
  @Input() Id: string = '123';

  myValue: string = '';
  isDisabled = false;
  isTouched = false;

  onChange!: (myValue: string) => void;
  onTouch!: () => void;

  constructor(public cd: ChangeDetectorRef) {
  }

  registerOnChange(onChange: (myValue: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  writeValue(value: string): void {
    this.myValue = value;
    this.cd.markForCheck();
  }

  onToggle(value: string) {
    if (!this.isDisabled) {
      console.log('onToggle', {
        o: this.myValue,
        n: value
      });
      this.myValue = value

      this.onChange(this.myValue);

      if (!this.isTouched) {
        this.isTouched = true;
        this.onTouch();
      }
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}

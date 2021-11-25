import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-yn',
  templateUrl: './yn.component.html',
  styleUrls: ['./yn.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YnComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YnComponent implements ControlValueAccessor {

  @Input() HasLabel: boolean = false;
  @Input() MyLabel: string = 'dropdown';
  @Input() CanEdit: boolean = false;
  @Input() Id: string = '123';

  isChecked = false;
  isDisabled = false;
  isTouched = false;

  onChange!: (isChecked: boolean) => void;
  onTouch!: () => void;

  public yesNoOptions: SelectItem[] = [
    <SelectItem>{value: false, label: 'No'},
    <SelectItem>{value: true, label: 'Yes'},
  ];

  constructor(public cd: ChangeDetectorRef) {
  }

  registerOnChange(onChange: (isChecked: boolean) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
    this.cd.markForCheck();
  }

  onToggle(value: boolean) {
    if (!this.isDisabled) {
      console.log('onToggle', {
        o: this.isChecked,
        n: value
      });
      this.isChecked = value

      this.onChange(this.isChecked);

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

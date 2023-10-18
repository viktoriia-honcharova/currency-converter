import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-converter-component',
  templateUrl: './converter-component.component.html',
  styleUrls: ['./converter-component.component.css'],
})
export class ConverterComponentComponent implements OnInit {
  form!: FormGroup;
  apiKey = '83c52927791747fe06ef35f4';
  convertedAmount!: number;
  currencyFrom!: number;
  currencyTo!: number;
  amount!: number;
  input!: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      amountFirst: new FormControl(null),
      firstCurrency: new FormControl('UAH'),
      secondCurrency: new FormControl('USD'),
      amountSecond: new FormControl(null),
    });
  }

  calculateFromFirst() {
    this.currencyFrom = this.form.get('firstCurrency')!.value;
    this.currencyTo = this.form.get('secondCurrency')!.value;
    this.amount = this.form.get('amountFirst')!.value;
    this.input = this.form.get('amountSecond');

    this.calculate(this.currencyFrom, this.currencyTo, this.amount, this.input);
  }

  calculateFromSecond() {
    this.currencyFrom = this.form.get('secondCurrency')!.value;
    this.currencyTo = this.form.get('firstCurrency')!.value;
    this.amount = this.form.get('amountSecond')!.value;
    this.input = this.form.get('amountFirst');

    this.calculate(this.currencyFrom, this.currencyTo, this.amount, this.input);
  }

  calculate(from: any, to: any, amount: any, input: any) {
    const url = `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair/${from}/${to}/${amount}`;

    if (amount !== null) {
      this.http.get(url).subscribe((data: any) => {
        this.convertedAmount = data.conversion_result;

        input!.setValue(this.convertedAmount);
      });
    } else {
      input!.setValue(null);
    }
  }
}

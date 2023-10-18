import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usdToUah: number | undefined;
  eurToUah: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUSD();
    this.getEUR();
  }

  apiKey = '83c52927791747fe06ef35f4';

  getUSD() {
    this.http
      .get(`https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/USD`)
      .subscribe((data: any) => {
        this.usdToUah = data.conversion_rates.UAH.toFixed(2);
      });
  }

  getEUR() {
    this.http
      .get(`https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/EUR`)
      .subscribe((data: any) => {
        this.eurToUah = data.conversion_rates.UAH.toFixed(2);
      });
  }

  uppdateRates() {
    this.getEUR();
    this.getUSD();
  }
}

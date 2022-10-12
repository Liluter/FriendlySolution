import { Component, OnInit } from '@angular/core';
import { Json, Data, grabJson } from '../common';
import data from '../assets/data.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataArray: Data[] = [];
  dataFiltered: any = [];
  search: any;
  lengthControl: number = 0;

  // Different approch with fetch()
  //
  // ngOnInit(): void {
  //   fetch('../assets/data.json')
  //     .then(response => response.json())
  //     .then((data: Json) => {
  //       this.dataArray = data.response.data;
  //       this.dataFiltered = data.response.data;`
  //     })
  //     .catch(err => console.log(err))
  // }

  ngOnInit(): void {
    grabJson(data)
      .then(((data) => {
        this.dataArray = data.response.data;
        this.dataFiltered = data.response.data;
      }))
      .catch(err => console.log(err))
  }

  keyStroke(change: string) {
    if (typeof this.search === "number") {
      clearTimeout(this.search);
    }
    this.search = setTimeout(() => {
      this.dataFiltered = this.dataArray.filter((item) =>
      item.description.toLowerCase().includes(change.toLowerCase().trim()));
      this.search = undefined;
    }, 1500);

  }
}

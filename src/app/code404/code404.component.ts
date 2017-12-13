import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-code404',
  templateUrl: './code404.component.html',
  styleUrls: ['./code404.component.css']
})
export class Code404Component implements OnInit {
  private message: string;

  constructor() {

  }

  ngOnInit() {
    this.message = '页面不存在';
  }

}

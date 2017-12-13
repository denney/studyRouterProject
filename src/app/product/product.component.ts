import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 快照
    this.productId = this.routeInfo.snapshot.queryParams['id'];

  }

}

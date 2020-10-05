import { Component, OnInit } from '@angular/core';
import { ROUTES_NAMES } from '@app/routes/routes';
// import { Store } from '@ngxs/store';
// import { FlagStatusState } from '@app/core/store/flag-status';

@Component({
  selector: 'gf-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  public urls = {
    home: ['/', ROUTES_NAMES.HOME ],
    product: ['/', ROUTES_NAMES.PRODUCT, 1 ],
    cart: ['/', ROUTES_NAMES.CART ]
  };

  // public isLoading: boolean;

  constructor(
    // private store: Store
  ) {
    // this.isLoading = false;
  }

  ngOnInit() {
    // this.store.select( FlagStatusState ).subscribe(() => {
    //   const isProgress = this.store.selectSnapshot( FlagStatusState );
    //   this.isLoading = isProgress.progressBar;
    // });
  }
}

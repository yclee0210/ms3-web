import { TestBed, inject } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';

xdescribe('WishlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistService]
    });
  });

  it('should be created', inject([WishlistService], (service: WishlistService) => {
    expect(service).toBeTruthy();
  }));
});

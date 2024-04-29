import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderaItemComponent } from './bandera-item.component';

describe('BanderaItemComponent', () => {
  let component: BanderaItemComponent;
  let fixture: ComponentFixture<BanderaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanderaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanderaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

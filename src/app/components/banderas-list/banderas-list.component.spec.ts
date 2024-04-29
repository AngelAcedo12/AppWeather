import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderasListComponent } from './banderas-list.component';

describe('BanderasListComponent', () => {
  let component: BanderasListComponent;
  let fixture: ComponentFixture<BanderasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanderasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanderasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

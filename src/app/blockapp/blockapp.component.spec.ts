import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockappComponent } from './blockapp.component';

describe('BlockappComponent', () => {
  let component: BlockappComponent;
  let fixture: ComponentFixture<BlockappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

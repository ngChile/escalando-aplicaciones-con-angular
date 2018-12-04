import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<div appHighlight></div>`
})
class TestingComponent {}

describe('HighlightDirective', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestingComponent, HighlightDirective
      ]
    });
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');

    inputEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('');
  });
});

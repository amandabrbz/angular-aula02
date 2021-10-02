import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aluno } from 'src/app/models/aluno';
import { Disciplina } from 'src/app/models/disciplina';
import { Turma } from 'src/app/models/turma';
import { By } from '@angular/platform-browser';

import { TurmaComponent } from './turma.component';

describe('TurmaComponent', () => {

  let component: TurmaComponent;
  let fixture: ComponentFixture<TurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TurmaComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaComponent);
    component = fixture.componentInstance;
    component.turma = new Turma(
      new Disciplina('mock', 'mock'),
      2021,
      1,
      [ new Aluno(0800, 'Mock') ]
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render', () => {
    it('should show name', () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.css('h1')
      ).nativeElement;
      expect(el.textContent).toContain('mock');
    });

    it('should render the name of the discipline', () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.css('div b')
      ).nativeElement;
      expect(el.textContent).toContain('mock');
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NameTransformPipe } from 'src/app/shared/pipes/name-transform.pipe';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserService } from 'src/app/shared/services/user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let userServiceMock: UserService;

  let modalServiceMock: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent, NameTransformPipe
      ],
      imports: [
        MatIconModule,
        FormsModule],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: ModalService, useValue: modalServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

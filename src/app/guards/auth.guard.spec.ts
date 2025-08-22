import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('authGuard', () => {
  let authService: AuthService;
  let router: Router;

  const executeGuard: CanActivateFn = () =>
    TestBed.runInInjectionContext(() => new AuthGuard(authService, router).canActivate());

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: { estaAutenticado: () => true } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    const mockRoute: any = {};
    const mockState: any = {};
    expect(executeGuard(mockRoute, mockState)).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { AuthService } from '../services/auth.service';

describe('adminGuard', () => {
  let authService: AuthService;
  let router: Router;

  const executeGuard: CanActivateFn = () =>
    TestBed.runInInjectionContext(() => new AdminGuard(authService, router).canActivate());

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: { estaAutenticado: () => true, isAdmin: () => true } },
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

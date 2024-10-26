import { Application } from '@nativescript/core';
import { initializeAuth } from './services/auth.service';

// Initialize authentication service
initializeAuth();

Application.run({ moduleName: 'app-root' });
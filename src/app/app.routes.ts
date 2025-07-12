import { Routes } from '@angular/router';
import { PageWrapper } from './components/page-wrapper/page-wrapper';
import { Summary } from './components/summary/summary';

export const routes: Routes = [
  {
    path: '',
    component: PageWrapper,
    children: [
      {
        path: 'summary',
        component: Summary,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'summary',
  },
];

//Add auth guard

import { Routes } from '@angular/router';
import { PageWrapper } from './components/page-wrapper/page-wrapper';
import { Summary } from './components/summary/summary';
import { Board } from './components/board/board';

export const routes: Routes = [
  {
    path: '',
    component: PageWrapper,
    children: [
      {
        path: 'summary',
        component: Summary,
      },
      {
        path: 'board',
        component: Board
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'summary',
  },
];

//Add auth guard

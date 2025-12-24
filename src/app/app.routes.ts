import { Routes } from '@angular/router';
import { Main } from './pages/main/main'
import { About } from './pages/about/about'
import { Contacts } from './pages/contacts/contacts'
import { Faq } from './pages/faq/faq'

export const routes: Routes = [
  {
    path: '',
    component: Main
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contacts',
    component: Contacts
  },
  {
    path: 'faq',
    component: Faq
  }
];

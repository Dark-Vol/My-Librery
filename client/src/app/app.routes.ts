import { Routes } from '@angular/router';
import { Main } from './features/main/main'
import { About } from './features/about/about'
import { Contacts } from './features/contacts/contacts'
import { Faq } from './features/faq/faq'
import { Catalog } from './features/catalog/catalog';

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
  },
  {
    path: 'catalog',
    component: Catalog
  }
];

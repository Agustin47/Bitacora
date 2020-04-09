import { Component } from '@angular/core';

import { WaterPage } from '../water/water';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactPage;
  tab1Icon = 'add';

  tab2Root = HomePage;
  tab2Icon = 'home';

  tab3Root = WaterPage;
  tab3Icon = 'ios-water';

  constructor() {

  }
}

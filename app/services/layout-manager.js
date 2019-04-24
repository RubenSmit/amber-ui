import Service, { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  media: inject(),
  session: inject(),
  localStorage: inject(),
  leftSideBarOpen: computed('media.isMobile', 'session.isAuthenticated', {
    get() {
      return (!this.get('media.isMobile') && this.get('session.isAuthenticated'));
    },
    set(key, value) {
      return value;
    }
  }),
  leftSideBarExpanded: computed('media.isMobile', 'localStorage', {
    get() {
      if (this.get('media.isMobile')) {
        return true;
      }
      // On non-mobile it is optional according to localstorage
      // localstorage stores it as a string
      return this.get('localStorage').getItem('leftSideBarExpanded') === 'true';
    },
    set(key, value) {
      this.get('localStorage').setItem('leftSideBarExpanded', value);
      return value;
    }
  }),

  profileMenuOpen: false,

  toggleProfileMenu() {
    this.toggleProperty('profileMenuOpen');
  },
  openProfileMenu() {
    this.set('profileMenuOpen', true);
  },
  closeProfileMenu() {
    this.set('profileMenuOpen', false);
  },
  toggleLeftSidebar() {
    this.toggleProperty('leftSideBarOpen');
  },
  closeLeftSidebar() {
    this.set('leftSideBarOpen', false);
  },
  openLeftSidebar() {
    this.set('leftSideBarOpen', true);
  },
  toggleLeftSidebarExpansion() {
    this.toggleProperty('leftSideBarExpanded');
  },
  expandLeftSidebar() {
    this.set('leftSideBarExpanded', true);
  },
  contractLeftSidebar() {
    this.set('leftSideBarExpanded', false);
  },
  closeLeftSidebarIfOnMobile() {
    if (this.get('media.isMobile')) {
      this.closeLeftSidebar();
    }
  }
});

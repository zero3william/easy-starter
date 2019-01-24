import { observable, action, configure } from 'mobx';
import http from '../interceptor';

// don't allow state modifications outside actions
configure({ enforceActions: 'always' });
class AppState {
  @observable appName = 'Bo-Front';
  @observable userToken = null;
  @observable isSidebarOpen = false;

  //api
  @action
  async login(payload) {
    return await http
      .post('login', payload)
      .then(data => data)
      .catch(err => err);
  }

  //UI
  @action.bound toggle_sidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

export default new AppState();

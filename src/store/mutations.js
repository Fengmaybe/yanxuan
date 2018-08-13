
import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV
} from './mutation-types';

export default {
  //tab的数据
  [RECEIVE_DATA] (state,{data}) {
    state.data = data;
  },

  //轮播图的数据
  [RECEIVE_BANNER] (state,{banner}) {
    state.banner = banner;
  },

  //轮播图底下(HOME)的数据
  [RECEIVE_HOME] (state,{home}) {
    state.home = home;
  },

  //实物页(detail)的数据
  [RECEIVE_DETAIL] (state,{detail}) {
    state.detail = detail;
  },

  //分类列表（nav）的数据
  [RECEIVE_NAV] (state,{nav}) {
    state.nav = nav;
  },



}

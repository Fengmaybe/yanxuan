
import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME
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



}

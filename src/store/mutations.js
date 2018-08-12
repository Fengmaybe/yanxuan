
import {
  DATA,
  BANNER,
  HOME
} from './mutation-types';

export default {
  //tab的数据
  [DATA] (state,{data}) {
    state.data = data;
  },

  //轮播图的数据
  [BANNER] (state,{banner}) {
    state.banner = banner;
  },

  //轮播图底下(HOME)的数据
  [HOME] (state,{home}) {
    state.home = home;
  },



}

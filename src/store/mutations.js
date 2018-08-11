
import {
  DATA,
  BANNER,
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



}

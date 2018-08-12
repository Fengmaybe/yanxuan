
import {
  reqData,
  reqBanner,
  reqDetail,
  reqHome,
  reqNav
} from '../api';
import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME
} from './mutation-types';

export default {
  //获取data的tab列表数据
  async getData({commit},cb){
    const result = await reqData();
    if(result.code === 0){
      commit(RECEIVE_DATA,{data:result.data});
      cb && cb()
    }
  },

  //获取轮播图的数据
  async getBanner({commit},cb){
    const result = await reqBanner();
    if(result.code === 0){
      commit(RECEIVE_BANNER,{banner:result.focusList});
      cb && cb();
    }
  },

  //获取Home的数据
  async getHome({commit},cb){
    const result = await reqHome();
    if(result.code === 0){
      commit(RECEIVE_HOME,{home:result.home});
      cb && cb();
    }
  }

}

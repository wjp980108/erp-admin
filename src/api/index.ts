import request from '@/utils/axios';

/**
 * 登录
 * @param data 接口参数
 */
export function login(data: AnyObj) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data,
  });
}

/**
 * 获取用户信息
 */
export function userInfo() {
  return request({
    url: '/api/auth/info',
    method: 'get',
  });
}

/**
 * @description 这个loader函数会在路由渲染前触发,所以可以用来做路由权限控制和登陆重定向
 * @description (取代请求拦截器中的登陆重定向)
 * @description 这个loader函数返回值可以在页面中通过 useRouteLoaderData(id)或者useLoaderData获取
 */
export const rootLoader = async () => {
  console.log('页面加载前loader信息')

  const name = 'zyh'

  return {
    name,
  }
}

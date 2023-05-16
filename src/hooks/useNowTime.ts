import { useEffect, useState } from 'react'

const useNowTime = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString())
    const timer = setTimeout(tick, 1000)
    return () => clearTimeout(timer)
  }, [time])
  return time
}

export default useNowTime

/**
 * 1.useEffect执行机制
 * 首次渲染不会执行return
 * 变量修改后，导致重新render，会先执行return，再执行useEffect内除return部分代码
 * return内的回调函数可以用来清理定时器等
 *
 * 2.依赖数组
 * useEffect在没有设置第二个参数的时候，会在每次渲染的时候执行其回调
 * 依赖数组改变才会触发执行，react核心思想是数据不可变，总是要你返回一个新对象，而不是在原对象上修改
 * 对于复杂数据类型如：对象，数组和函数来说，React会使用referential equality来对比前后是否有不同
 * React会检查当前渲染下的这个对象和上一次渲染下的对象的内存地址是否一致。两个对象必须是同一个对象useEffect才会跳过* 执行effect。所以，即使内容完全相同，内存地址不同的话，useEffect还是会执行effect。
 */

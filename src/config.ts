export const G: GlobalConfig = {
  firstInMsg: '欢迎来到末日求生，请尽力生存下去',
  refreshRate: 600000, //10分钟更新一次
  healthInfo: [
    {
      title: '生命',
      key: 'life',
      default: 100,
    },
    {
      title: '饱腹',
      key: 'hunger',
      default: 80,
    },
    {
      title: '口渴',
      key: 'thirsty',
      default: 100,
    },
    {
      title: '耐力',
      key: 'endurance',
      default: 80,
    },
    {
      title: '体温',
      key: 'temperature',
      default: 100,
    },
    {
      title: 'SAN',
      key: 'san',
      default: 100,
    },
  ],
}

declare type HealthInfo =
  | 'life'
  | 'hunger'
  | 'thirsty'
  | 'endurance'
  | 'temperature'
  | 'san'

declare type ConfKeyNum = {
  title: string
  key: HealthInfo
  default: number
}

declare type GlobalConfig = {
  firstInMsg: string
  healthInfo: ConfKeyNum[]
}

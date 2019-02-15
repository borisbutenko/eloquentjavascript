import min from './min'
import isEven from './is-even'
import countChars, { countBs } from './count-chars'

console.log('')

console.log('call min between "0" and "10":')
console.log(min(0, 10))
console.log('call min between "0" and "-10":')
console.log(min(0, -10))

console.log('')
console.log('call isEven with value as "50":')
console.log(isEven(50))
console.log('call isEven with value as "75":')
console.log(isEven(75))
console.log('call isEven with value as "-1":')
console.log(isEven(-1))

console.log('')
console.log('call countBs with value as "BBC":')
console.log(countBs('BBC', 'B'))

console.log('')
console.log('call countChars with arguments as "Hello World" and "l":')
console.log(countChars('Hello World', 'l'))

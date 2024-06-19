import español from './es.json'
import english from './en.json'



export function getLenguaje(currentLocale){
  if(currentLocale=='es') return español
  if(currentLocale=='en') return english
  return español
}
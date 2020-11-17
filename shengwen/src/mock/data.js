const superagent = require('superagent')

const cheerio = require('cheerio')
const moment = require('moment')
moment.locale('zh-cn')
const result=[];
const img=[]

superagent.get('https://www.toutiao.com/ch/news_finance/').end((err,data) => {
  if(err)  return console.log('failed')
  write(data.text)
})

function  write(page){
  console.log(1)
  const $ = cheerio.load(page)
  console.log(page)
  $('.feed-list > .single-mode').each((index,item) => {
    console.log(3)
    const obj ={
      id:'info' + index,
      imgs:$(item).find('img').prop('src'),
      info:$(item).find('.title-box >a').text(),
      name:$(item).find('.footer-bar-left > firstchild').text(),
      avartor:$(item).find('.media-avatar >img').prop('src'),
      time:moment(new Date()).format('llll'),
      follow:false,
      fabulous:false,
    }
    result.push(obj)
  })
  console.log(result)
}
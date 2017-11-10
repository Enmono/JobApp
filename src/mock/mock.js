const Mock = require('mockjs')
const Random = Mock.Random
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      rec: Random.extend({
        constellation: function (data) {
          let constellations = ['本科', '大专', '不限']
          return this.pick(constellations)
        }
      }),
      records: Random.constellation(),
      title: Random.csentence(5, 10), // random.csentnece(min,max)
      po: Random.extend({
        constellation: function (data) {
          let constellations = ['前端开发实习生', '前端开发工程师', 'web前端', '前端实习生', '全栈工程师', '资深前端工程师', '前端开发']
          return this.pick(constellations)
        }
      }),
      position: Random.constellation(),
      pr: Random.extend({
        constellation: function (data) {
          let constellations = ['3k-6k', '5k-8k', '10k-12k', '4k-7k', '5k-6k', '2k-4k', '8k-12k']
          return this.pick(constellations)
        }
      }),
      salary: Random.constellation(),
      cp: Random.extend({
        constellation: function (data) {
          let constellations = ['小麦助教', '方克教育', '新浪分期', '网易', '蚂蚁信贷', '猎米网络科技', '厦门瑜伽网络']
          return this.pick(constellations)
        }
      }),
      company: Random.constellation(),
      loc: Random.extend({
        constellation: function (data) {
          let constellations = ['杭州 江干区 白杨', '杭州 余杭区', '杭州 西湖区 古荡', '杭州 西湖区 西溪', '杭州 余杭区', '杭州 滨江区 长河', '杭州 萧山区']
          return this.pick(constellations)
        }
      }),
      location: Random.constellation(),
      pla: Random.extend({
        constellation: function (data) {
          let constellations = ['CEO', 'HR', '总经理', '总经理助理', '行政', '技术总监', '副总']
          return this.pick(constellations)
        }
      }),
      place: Random.constellation(),
      author_img: Random.image('100x100', '#fb9bb7'), // 随机生成一个图片
      author_img1: Random.image('200x200', '#ff8a6d'),
      author_name: Random.cname(), // 随机生成一个常见的中文姓名
      peo: Random.extend({
        constellation: function (data) {
          let constellations = ['1-3年', '经验不限', '1年以内', '3-5年', '应届生', ' 1-2年', '不限经验']
          return this.pick(constellations)
        }
      }),
      people: Random.constellation(),
      lev: Random.extend({
        constellation: function (data) {
          let constellations = ['D轮及以上', 'A轮', 'B轮', 'C轮', '未融资', '天使轮', '不需要融资']
          return this.pick(constellations)
        }
      }),
      level: Random.constellation(),
      ind: Random.extend({
        constellation: function (data) {
          let constellations = ['互联网', '移动互联网', 'IT软件']
          return this.pick(constellations)
        }
      }),
      industry: Random.constellation(),
      cou: Random.extend({
        constellation: function (data) {
          let constellations = ['100-499人', '1000-9999人', '20-99人', '互联网', '15人以下', '500-999人', '10000以上']
          return this.pick(constellations)
        }
      }),
      count: Random.constellation(),
      hot: Random.extend({
        constellation: function (data) {
          let constellations = ['热招：前端开发实习生等219个职位', '热招：前端开发1232个职位', '热招：web前端开发实习生等137个职位', '热招：web前端等430个职位', '热招：web前端等414个职位', '热招：前端开发实习生等220个职位', '热招：Web前端工程师等1978个职位']
          return this.pick(constellations)
        }
      }),
      hotter: Random.constellation()
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}

// Mock.mock(url,post/get,返回的数据)
Mock.mock(/\.json/, 'post', produceNewsData)

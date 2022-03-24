let fs = require("fs");
let addrDataList = require("./newAddrInfo.json")   

// 整理縣市鄉鎮路名
// const resList = []
// for (const addrData of addrDataList) {
//   const {city, site_id, road} = addrData
//   const site = site_id.replace(city, "")
//   console.log(addrData)
//   let cityIdx = resList.findIndex(e => e.city === city)
//   if(cityIdx === -1){
//     resList.push({
//       city,
//       siteList: []
//     })
//     cityIdx = resList.length - 1
//   }
//   let citydata = resList[cityIdx]
//   let siteIdx = citydata.siteList.findIndex(e => e.site === site)
//   if(siteIdx === -1){
//     citydata.siteList.push({
//       site, 
//       roadList: []
//     })
//     siteIdx = citydata.siteList.length - 1
//   }
//   let siteData = citydata.siteList[siteIdx]
//   if(!siteData.roadList.find(_road => _road === road)) {
//     siteData.roadList.push(road)
//   }
// }


// 整理縣市跟鄉鎮
// const resList = []
// for (const addrData of addrDataList) {
//   const {city, site_id} = addrData
//   const site = site_id.replace(city, "")
//   let cityIdx = resList.findIndex(e => e.city === city)
//   if(cityIdx === -1){
//     resList.push({
//       city,
//       siteList: []
//     })
//     cityIdx = resList.length - 1
//   }
//   let citydata = resList[cityIdx]
//   let siteIdx = citydata.siteList.findIndex(e => e.site === site)
//   if(siteIdx === -1){
//     if(!citydata.siteList.find(_site => _site === site)) {
//       citydata.siteList.push(site)
//     }
//   }
// }

// 排序
const sort = ["基隆市", "臺北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "臺中市", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"]
let result = []
for(const key of sort) {
  for(const item of resList) {
    if(item.city === key) {
      result.push(item)
    }
  }
}

// 寫入檔案
fs.writeFile(`newdata.json`, JSON.stringify(result, null, 2), (err) => {
  if(!err) return
  console.log(err);
})
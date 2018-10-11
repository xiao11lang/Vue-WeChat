//最新
const API = {
  new: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923',
  suggest: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472",
  searchLeft: "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=",
  searchRight: "&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1520833663464"
}
export function getData(type, callback) {
  let url = "";
  if (typeof type === "string") {
    if (type === "new") {
      url = API.new
    } else {
      url = API.suggest
    }
  } else {
    url = API.searchLeft + type.songName + API.searchRight
  }
  $.ajax({
    url: url,
    type: "get",
    dataType: 'jsonp',
    jsonp: "callback",
    jsonpCallback: 'callback',
    scriptCharset: 'UTF-8', //解决中文乱码
    success: function (data) {
      callback(data)
    },
    error: function (e) {
      console.log('error');
    }
  });
}
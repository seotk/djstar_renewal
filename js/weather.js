// async function loadItems() {
//   const data = await fetch(
//     "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&numOfRows=10&pageNo=1&base_date=20210628&base_time=0600&nx=55&ny=127"
//   );
//   const list = await data.json();
//   return list.dataseries;
//   // .then((list) => console.log(list.dataseries[1]));
// }
const $weatherContainer = document.querySelector(".weather_contests");

function loadItems() {
  return fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.354&lat=36.382&product=civillight&output=json"
  )
    .then((response) => response.json())
    .then((items) => displayItems(items));
  // .catch(console.log);
}
loadItems();
function displayItems(items) {
  let todayWeather = document.createElement("div");
  let todayData = items.dataseries[0];
  let todayDataDate = todayData.date.toString();
  let todayMonth = todayDataDate[5];
  let todayDay = todayDataDate.substr(6, 2);
  todayWeather.innerHTML = `                <p>${todayMonth}월 ${todayDay}일</p>
  <img src="./imges/${todayData.weather}.svg" alt="${todayData.weather}">
  <p>${todayData.temp2m.min}/${todayData.temp2m.max}</p>`;
  $weatherContainer.appendChild(todayWeather);
}

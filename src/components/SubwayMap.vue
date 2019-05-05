<template>
  <div id="subway-map"></div>
</template>
<script>
import BMapSub from "BMapSub";
import BMAPSUB_ANCHOR_BOTTOM_RIGHT from "BMapSub";

export default {
  name: "SubwayMap",
  data: function() {
    return {};
  },
  mounted: function() {
    var subwayCityName = "杭州";
    var list = BMapSub.SubwayCitiesList;
    var subwaycity = null;
    for (var i = 0; i < list.length; i++) {
      if (list[i].name === subwayCityName) {
        subwaycity = list[i];
        break;
      }
    }

    var subway = new BMapSub.Subway("subway-map", subwaycity.citycode);
    var zoomControl = new BMapSub.ZoomControl({
      anchor: BMAPSUB_ANCHOR_BOTTOM_RIGHT,
      offset: new BMapSub.Size(10, 100)
    });
    subway.addControl(zoomControl);
    var infowindow = new BMapSub.InfoWindow(
      '<div id="bd-subwayInfo">' +
        '<div id="bd-subwayTitle">' +
        "人流量较大" +
        "</div>" +
        "</div>"
    );
    subway.openInfoWindow(infowindow, "西湖文化广场");
    var startIcon = new BMapSub.Icon(
      "https://api.map.baidu.com/images/subway/start-bak.png",
      new BMapSub.Size(50, 80)
    );
    var marker = new BMapSub.Marker("火车东站", { icon: startIcon });
    subway.addMarker(marker);
    // subway.setCenter("火车东站");
    subway.addEventListener("tap", function(e) {
      alert('您点击了"' + e.station.name + '"站');
      var detail = new BMapSub.DetailInfo(subway);
      detail.search(e.station.name);
    });
    // subway.addEventListener("subwayloaded", function() {
    //   var detail = new BMapSub.DetailInfo(subway);
    //   detail.search("火车东站");
    // });
    subway.addEventListener("subwayloaded", function() {
      var drct = new BMapSub.Direction(subway);
      drct.search("凤起路", "朝阳");
    });
    subway.addEventListener("directioncomplete", function() {
      alert("可以自定义点击详情后的操作！");
    });
    subway.setZoom(1);
    // subway.addEventListener("subwayloaded", function() {
    //   alert("地铁图加载完成");
    // });
  }
};
</script>
<style>
#subway-map {
  height: 100%;
}
</style>

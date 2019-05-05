<template>
  <div id="subway-map"></div>
</template>
<script>
import BMapSub from "BMapSub";
import BMAPSUB_ANCHOR_BOTTOM_RIGHT from "BMapSub";

export default {
  name: "SubwayMap",
  data: function() {
    return {
      detail: null
    };
  },
  mounted: function() {
    var subway = new BMapSub.Subway("subway-map", "179");

    var zoomControl = new BMapSub.ZoomControl({
      anchor: BMAPSUB_ANCHOR_BOTTOM_RIGHT,
      offset: new BMapSub.Size(10, 100)
    });
    subway.addControl(zoomControl);

    /*
    var startIcon = new BMapSub.Icon(
      "https://api.map.baidu.com/images/subway/start-bak.png",
      new BMapSub.Size(50, 80)
    );
    var marker = new BMapSub.Marker("近江", { icon: startIcon });
    subway.addMarker(marker);
    */
    var infowindow = new BMapSub.InfoWindow(
      `
      <div id="bd-subwayInfo">
        <div id="bd-subwayTitle">
          近江
        </div>
      </div>
      `
    );
    subway.openInfoWindow(infowindow, "近江");
    subway.setCenter("近江");
    subway.setZoom(1);

    subway.addEventListener("tap", function(e) {
      alert('您点击了"' + e.station.name + '"站');

      self.detail.search("近江");
    });
    
    subway.addEventListener("subwayloaded", function() {
      alert("地铁图加载完成");
      self.detail = new BMapSub.DetailInfo(subway);

      var drct = new BMapSub.Direction(subway);
      drct.search("近江", "振宁路");
    });
  }
};
</script>
<style>
#subway-map {
  height: 100%;
}

#bd-subwayTitle {
  text-align: center;
  line-height: 50px;
}
</style>

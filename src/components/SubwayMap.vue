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

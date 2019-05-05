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

    var startIcon = new BMapSub.Icon(
      "https://api.map.baidu.com/images/subway/start-bak.png",
      new BMapSub.Size(50, 80)
    );
    var marker = new BMapSub.Marker("近江", { icon: startIcon });
    subway.addMarker(marker);
    subway.setZoom(1);
  }
};
</script>
<style>
#subway-map {
  height: 100%;
}
</style>

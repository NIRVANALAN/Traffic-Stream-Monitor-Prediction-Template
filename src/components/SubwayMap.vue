<template>
  <div id="subway-map"></div>
</template>
<script>
import BMapSub from "BMapSub";

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
    subway.setZoom(0.5);
  }
};
</script>
<style>
#subway-map {
  height: 100%;
}
</style>

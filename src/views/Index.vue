<template>
  <div id="index">
    <mt-navbar fixed v-model="active" class="nav-top">
      <mt-tab-item id="recommend">推荐</mt-tab-item>
      <mt-tab-item id="city">{{ city }}</mt-tab-item>
      <mt-tab-item id="star">明星</mt-tab-item>
      <mt-tab-item id="Military">军事</mt-tab-item>
      <mt-tab-item id="international">国际</mt-tab-item>
    </mt-navbar>
    <iframe
      id="geoPage"
      width="0"
      height="0"
      frameborder="0"
      style="display:none;"
      scrolling="no"
      src="https://apis.map.qq.com/tools/geolocation?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"
    ></iframe>
    <mt-tab-container class="main-part">
      <mt-tab-container-item id="recommend">
        1
      </mt-tab-container-item>
      <mt-tab-container-item id="city">
        2
      </mt-tab-container-item>
      <mt-tab-container-item id="star">
        3
      </mt-tab-container-item>
      <mt-tab-container-item id="Military">
        4
      </mt-tab-container-item>
      <mt-tab-container-item id="international">
        5
      </mt-tab-container-item>
    </mt-tab-container>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "recommend",
      city: "北京",
    };
  },
  methods: {
    // 获取经纬度
    Tmap() {
      window.addEventListener(
        "message",
        (event) => {
          let loc = event.data;
          if (loc) {
            // console.log(loc);
            let city = loc.city.slice(0, -1);
            this.city = city;
          }
        },
        false
      );
    },
  },
  mounted() {
    // 获取用户地理位置
    this.Tmap();
  },
};
</script>
<style>
#index .is-selected {
  color: #ff4a9b;
  border-bottom-color: #ff4a9b;
}
#index .nav-top {
  background-color: #f2f2f2;
}
#index .main-part {
  padding-top: 5vh;
}
</style>

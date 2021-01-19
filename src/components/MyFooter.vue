<template>
  <div id="my_footer">
    <mt-tabbar fixed v-model="selectedTab">
      <mt-tab-item class="tabbar" id="index">
        <img
          v-if="selectedTab == 'index'"
          src="/img/tabbar/shouye.ac.png"
          slot="icon"
        />
        <img v-else src="/img/tabbar/shouye.png" slot="icon" />
        首页
      </mt-tab-item>
      <mt-tab-item class="tabbar" id="discover">
        <img
          v-if="selectedTab == 'discover'"
          src="/img/tabbar/faxian.ac.png"
          slot="icon"
        />
        <img v-else src="/img/tabbar/faxian.png" slot="icon" />
        发现
      </mt-tab-item>
      <mt-tab-item class="tabbar" id="issue">
        <img
          v-if="selectedTab == 'issue'"
          src="/img/tabbar/fabu.ac.png"
          slot="icon"
        />
        <img v-else src="/img/tabbar/fabu.png" slot="icon" />
        发布
      </mt-tab-item>
      <mt-tab-item class="tabbar" id="me">
        <img
          v-if="selectedTab == 'me'"
          src="/img/tabbar/wode.ac.png"
          slot="icon"
        />
        <img v-else src="/img/tabbar/wode.png" slot="icon" />
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: this.$store.state.selectedTab,
    };
  },
  watch: {
    selectedTab(value) {
      if (value == "index") {
        this.$router.push("/");
      } else {
        this.$router.push(`/${value}`);
      }
      this.$store.commit("changeSelTab", value);
    },
  },
};
</script>
<style>
#my_footer .is-selected {
  color: #ff4a9b;
}
</style>

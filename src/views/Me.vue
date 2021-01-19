<template>
  <div class="me">
    <div class="avatar-fa" @click="isLogin">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=249589786,2941481629&fm=26&gp=0.jpg"
        alt="图片加载失败"
        class="avatar"
      />
      <div>登录</div>
    </div>
    <div class="nav">
      <div>
        <img src="/img/me.nav/set.svg" />
        <span>设置</span>
      </div>
      <div>
        <img src="/img/me.nav/integral.svg" />
        <span>积分</span>
      </div>
      <div>
        <img src="/img/me.nav/share.svg" />
        <span>分享</span>
      </div>
    </div>

    <div>
      <mt-cell class="cell" title="夜间模式">
        <img src="/img/me.nav/night.svg" slot="icon" />
        <mt-switch v-model="night" class="flr"></mt-switch>
      </mt-cell>
      <mt-cell class="cell" title="我的消息">
        <img src="/img/me.nav/my_message.svg" slot="icon" />
        <span class="flr">&gt;</span>
      </mt-cell>
      <mt-cell class="cell" title="我的发布">
        <img src="/img/me.nav/my_release.svg" slot="icon" />
        <span class="flr">&gt;</span>
      </mt-cell>
      <mt-cell class="cell" title="我的关注">
        <img src="/img/me.nav/my_focus.svg" slot="icon" />
        <span class="flr">&gt;</span>
      </mt-cell>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      night: false,
    };
  },
  methods: {
    isLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.me {
  box-sizing: border-box;
  padding-top: 6vh;
}
.me .avatar-fa {
  padding: 0 40vw;
  width: 20vw;
  font-size: 0.8rem;
  background-color: #fff;
  text-align: center;
}
.me .avatar {
  width: 100%;
  border-radius: 50%;
}
.me .nav {
  margin-top: 4vh;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.me .nav img {
  width: 100%;
}
.me .cell {
  padding-left: 3vw;
  padding-right: 3vw;
}
.me .cell:first-child {
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.me .cell:last-child {
  border-bottom: 1px solid #ccc;
}
.me .cell img {
  width: 10vw;
}
.me .mint-cell-title {
  flex: none;
}
.me .flr {
  font-size: 1.4rem;
  position: absolute;
  right: 8vw;
}
</style>

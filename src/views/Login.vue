<template>
  <div class="login">
    <!-- 头部 -->
    <mt-header title="登录" class="header">
      <div
        @click="
          $router.go(-1);
          $store.commit('changeSelTab', 'me');
        "
        slot="left"
      >
        <mt-button icon="back"></mt-button>
      </div>
      <router-link to="/register" slot="right">
        注册
      </router-link>
    </mt-header>
    <!-- 用户名 密码 -->
    <div class="input">
      <mt-field
        type="text"
        v-model="uname"
        placeholder="请输入账号/手机号/邮箱"
        @blur.native.capture="checkUname"
        :state="conuname"
      ></mt-field>
      <div class="con" v-show="conuname == 'error'">
        用户名格式不对 请输入6~12字母或数字
      </div>
      <mt-field
        type="password"
        v-model="upwd"
        placeholder="请输入密码"
        @blur.native.capture="checkUpwd"
        :state="conupwd"
      ></mt-field>
      <div class="con" v-show="conupwd == 'error'">
        密码格式不对 请输入6~16字母或数字
      </div>
    </div>
    <div class="button">
      <mt-button size="large" @click="isLogin">登录</mt-button>
      <span>忘记密码?</span>
    </div>
    <div class="text">其他的登录方式</div>
    <div class="icon">
      <img src="/img/login/wechat.svg" />
      <img src="/img/login/microblog.svg" />
      <img src="/img/login/qq.svg" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      conuname: "",
      conupwd: "",
    };
  },
  methods: {
    // 校验用户名
    checkUname() {
      let regExp = /^\w{6,12}$/;
      if (!regExp.test(this.uname)) {
        this.conuname = "error";
        return false;
      }
      if (!this.dobuname) this.conuname = "success";
      return true;
    },
    // 校验密码
    checkUpwd() {
      let regExp = /^[\d,A-Z,a-z]{6,16}$/;
      if (!regExp.test(this.upwd)) {
        this.conupwd = "error";
        return false;
      } else {
        this.conupwd = "success";
        return true;
      }
    },
    isLogin() {
      if (this.checkUname() && this.checkUpwd()) {
        this.axios
          .post("/lime/login", `uname=${this.uname}&upwd=${this.upwd}`)
          .then((res) => {
            console.log(res);
          });
      } else {
        this.$toast("用户名/密码格式不正确");
      }
    },
  },
};
</script>
<style>
.login {
  height: 94vh;
}
.login .header {
  background-color: #fafafa;
  font-size: 18px;
  color: #666;
  border-bottom: 1px solid #ccc;
}
.login .header a {
  text-decoration: none;
  font-size: 16px;
}
.login .input {
  padding-top: 5vh;
}
.login .input input {
  padding: 15 0;
  border-bottom: 1 solid #ddd;
}

.login .input input::placeholder {
  color: #aaa;
}
.login .button {
  padding: 0 5vw;
  margin-top: 8vh;
  font-size: 12px;
  text-align: right;
}
.login .button button {
  background-color: #ff4a9b;
  color: #fff;
  font-weight: 500;
  margin-bottom: 2vh;
}
.login .text {
  position: relative;
  bottom: -24vh;
  color: #666;
  font-family: "华文中宋";
}
.login .icon {
  position: relative;
  display: flex;
  bottom: -32vh;
  justify-content: space-around;
}
.login .icon img {
  width: 18vw;
}
</style>

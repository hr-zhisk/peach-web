<template>
  <div class="register">
    <!-- 头部 -->
    <mt-header title="注册" class="header">
      <div
        @click="
          $router.go(-1);
          $store.commit('changeSelTab', 'me');
        "
        slot="left"
      >
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="input">
      <mt-field
        label="用户账号"
        type="text"
        placeholder="由6~12字母或数字组成"
        v-model="uname"
        @blur.native.capture="checkUname"
        :state="conuname"
      ></mt-field>
      <div class="con" v-show="conuname == 'error' && !dobuname">
        用户名格式不对 请输入6~12字母或数字
      </div>
      <div class="con" v-show="dobuname">
        用户名已被占用
      </div>
      <mt-field
        label="登录密码"
        type="password"
        placeholder="由6~16字母或数字组成"
        @blur.native.capture="checkUpwd"
        v-model="upwd"
        :state="conupwd"
      ></mt-field>
      <div class="con" v-show="conupwd == 'error'">
        密码格式不对 请输入6~16字母或数字
      </div>
      <mt-field
        label="验证密码"
        type="password"
        placeholder="请与登录密码保持一致"
        v-model="secpwd"
        @blur.native.capture="checkSecpwd"
        :state="consecpwd"
      ></mt-field>
      <div class="con" v-show="consecpwd == 'error'">
        验证密码请与密码一致
      </div>
      <mt-field
        label="手机号/邮箱"
        type="text"
        placeholder="请输入手机号/邮箱格式"
        v-model="pe"
        :state="conpe"
        @blur.native.capture="checkPe"
      ></mt-field>
      <div class="con" v-show="conpe == 'error'">
        手机号或邮箱格式不对
      </div>
    </div>
    <div class="button">
      <mt-button size="large" @click="register">注册</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 保存用户名密码等等
      uname: "",
      upwd: "",
      secpwd: "",
      pe: "",
      // 验证用户名 密码是否有误
      conuname: "",
      dobuname: false,
      conupwd: "",
      consecpwd: "",
      conpe: "",
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
    // 校验二次密码
    checkSecpwd() {
      if (this.secpwd === this.upwd) {
        this.consecpwd = "success";
        return true;
      } else {
        this.consecpwd = "error";
        return false;
      }
    },
    // 校验手机号/邮箱
    checkPe() {
      let regExp = /^1[3-9]\d{9}|[1-9,a-z,A-Z]+@[1-9,a-z,A-Z]+\.com$/;
      if (regExp.test(this.pe)) {
        this.conpe = "success";
        return true;
      } else {
        this.conpe = "error";
        return false;
      }
    },
    register() {
      if (this.dobuname) {
        this.$toast("请检查用户名");
      } else if (!this.checkUpwd()) {
        this.$toast("密码格式不对");
      } else if (!this.checkSecpwd()) {
        this.$toast("两次密码不一致");
      } else if (!this.checkPe()) {
        this.$toast("手机号/邮箱格式不正确");
      }
      if (
        !this.dobuname &&
        this.checkUpwd() &&
        this.checkPe() &&
        this.checkSecpwd()
      ) {
        this.axios
          .post(
            "/lime/register",
            `uname=${this.uname}&upwd=${this.upwd}&pe=${this.pe}`
          )
          .then((res) => {
            if (res.data.msg == 1) {
              this.$toast("注册成功");
              this.uname = "";
              this.upwd = "";
              this.secpwd = "";
              this.pe = "";
            }
          });
      }
    },
  },
  watch: {
    uname() {
      let regExp = /^\w{6,12}$/;
      // 验证用户名是否重复
      if (regExp.test(this.uname)) {
        this.axios.post("/lime/regUname", `uname=${this.uname}`).then((res) => {
          // console.log(res);
          res.data.length ? (this.dobuname = true) : (this.dobuname = false);
          this.dobuname
            ? (this.conuname = "error")
            : (this.conuname = "success");
          return true;
        });
      }
    },
  },
};
</script>
<style>
.register .header {
  background-color: #fafafa;
  font-size: 18px;
  color: #666;
  border-bottom: 1px solid #ccc;
}
.register .input {
  padding-top: 5vh;
}
.register .input input {
  padding: 15 0;
  border-bottom: 1 solid #ddd;
}
.register .input .con {
  color: #f00;
  text-align: center;
  font-size: 14px;
}
.register .input input::placeholder {
  color: #aaa;
}
.register .button {
  padding: 0 5vw;
  margin-top: 8vh;
  font-size: 12px;
  text-align: right;
}
.register .button button {
  background-color: #ff4a9b;
  color: #fff;
  font-weight: 500;
  margin-bottom: 2vh;
}
</style>

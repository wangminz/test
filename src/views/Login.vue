<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">请您登录</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{right_phone: rightPhone}"
                @click.prevent="getCode"
              >{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code" />
            </section>
            <section class="login_hint">
              温馨提示：未注册外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd" />
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd" />
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" />
                <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>

    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </section>
</template>

<style type="text/css" lang="scss">
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
<script type="text/javascript">
import AlertTip from ".././components/AlertTip.vue";
import { reqSendCode, reqSmsLogin, reqPwdLogin } from ".././api";
export default {
  // 注册组件
  components: { AlertTip },
  data() {
    return {
      // true代表短信登陆, false代表密码
      loginWay: false,
      // 计时的时间
      computeTime: 0,
      // 是否显示密码
      showPwd: false,
      // 手机号
      phone: "",
      // 短信验证码
      code: "",
      // 用户名
      name: "",
      // 密码
      pwd: "",
      // 图形验证码
      captcha: "",
      // 提示文本
      alertText: "",
      // 是否显示警告框
      alertShow: false
    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone);
    }
  },
  methods: {
    // 异步获取短信验证码
    async getCode() {
      // 如果当前没有计时
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 30;
        this.intervalId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime <= 0) {
            // 停止计时
            clearInterval(this.intervalId);
          }
        }, 1000);

        // 发送ajax请求(向指定手机号发送验证码短信)
        const result = await reqSendCode(this.phone);
        if (result.code === 1) {
          // 显示提示
          this.showAlert(result.msg);
          // 停止计时
          if (this.computeTime) {
            this.computeTime = 0;
            clearInterval(this.intervalId);
            this.intervalId = undefined;
          }
        }
      }
    },

    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },
    // 异步登陆
    async login() {
      let result;
      // 前台表单验证
      if (this.loginWay) {
        // 短信登陆
        const { rightPhone, phone, code } = this;
        if (!this.rightPhone) {
          // 手机号不正确
          this.showAlert("手机号不正确");
          return;
        } else if (!/^\d{6}$/.test(code)) {
          // 验证必须是6位数字
          this.showAlert("验证必须是6位数字");
          return;
        }
        // 发送ajax请求短信登陆
        result = await reqSmsLogin(phone, code);
      } else {
        // 密码登陆
        const { name, pwd, captcha } = this;
        if (!this.name) {
          // 用户名必须指定
          this.showAlert("用户名必须指定");
          return;
        } else if (!this.pwd) {
          // 密码必须指定
          this.showAlert("密码必须指定");
          return;
        } else if (!this.captcha) {
          // 验证码必须指定
          this.showAlert("验证码必须指定");
          return;
        }
        // 发送ajax请求密码登陆
        result = await reqPwdLogin({ name, pwd, captcha });
      }

      // 停止计时
      if (this.computeTime) {
        this.computeTime = 0;
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }

      // 根据结果数据处理
      if (result.code === 0) {
        const user = result.data;
        // 将user保存到vuex的state
        this.$store.dispatch("recordUser", user);
        // 去个人中心界面
        this.$router.replace("/profile");
      } else {
        // 显示新的图片验证码
        this.getCaptcha();
        // 显示警告提示
        const msg = result.msg;
        this.showAlert(msg);
      }
    },
    // 关闭警告框
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
    // 获取一个新的图片验证码
    getCaptcha() {
      // 每次指定的src要不一样
      this.$refs.captcha.src =
        "http://localhost:4000/captcha?time=" + Date.now();
    }
  }
};
</script>
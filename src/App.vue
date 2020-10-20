<template>
  <div id="app">
    <div class="nav-box">
      <div class="logoArea" @click='backToHome'>
        <i class="iconfont logo">&#xe602;</i>
        <span>有志青年网</span>
      </div>
      <div class="nav-list">
        <router-link to='/home'>
          <i class="iconfont">&#xe600;</i>
          首页
        </router-link>
        <router-link to='/movies'>
          <i class="iconfont">&#xe605;</i>
          影视推荐
        </router-link>
        <router-link to='/books'>
          <i class="iconfont">&#xe609;</i>
          好书推荐
        </router-link>
        <router-link to='/works'>
          <i class="iconfont">&#xe606;</i>
          作品展示
        </router-link>
        <div class="showMore" @click.stop='showMore'>
          更多
          <i class="iconfont">&#xe601;</i>
        </div>
      </div>
      <ul class="more" :style="show?showStyle : hideStyle">
          <li>
            <router-link to='/memberInfo'>成员信息</router-link>
          </li>
          <li>
            <a href="http://www.ncut.edu.cn/" target="blank">我们的靠山</a>
          </li>
        </ul>
      <div class="mask"></div>
    </div>

    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
      showStyle: {
        height: '60px'
      },
      hideStyle: {
        height: '0px'
      }
    }
  },
  components: {},
  methods: {
    backToHome() {
      if(this.$router.history.current.fullPath === '/home'){
        return;
      }
      this.$router.push('/home');
    },
    showMore() {
      this.show = !this.show;
    }
  },
  mounted() {
    document.addEventListener('click', (e)=>{
      if(this.show){
        this.show = false;
      }
    }, false)
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.nav-box {
  width: 100%;
  height: 60px;
  background-image: linear-gradient(to bottom, rgba(227, 64, 45), rgba(247, 80, 65));
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
}
.nav-box>.logoArea{
  z-index: 2;
}
.logo {
  height: 50px;
  widows: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, .7) 0%, rgba(255, 0, 0, .3) 50%, rgba(255, 255, 255) 100%);
  font-size: 50px;
  margin-right: 10px;
}

.nav-list {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
}
a,
.showMore,
.logoArea{
  cursor: pointer;
  color: #fff;
}
.nav-list a:hover,
.nav-list a:hover .iconfont{
  color: #831d4d
}
.mask{
  width: 100%;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: 30px;
  background: transparent;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, .2) 100%);
}
.content{
  box-sizing: border-box;
  width: 100%;
  padding: 0 15%;
  margin-top: 3%;
  color: rgb(70, 65, 65);
}

.link-exact-active,
.link-exact-active .iconfont{
  color: #831d4d;
}
/* rgb(209, 195, 195) */
.more{
  width: 100px;
  position: absolute;
  top: 60px;
  right: 15%;
  color: #fff;
  overflow: hidden;
  transition: all .3s;
}
.more li{
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #f40;
  background-image: linear-gradient(to right, rgba(0, 0, 0, .2), transparent 50%, rgba(0, 0, 0, .2));
  cursor: pointer;
}
.more li:hover{
  background: rgba(234, 70, 52, 0.555);
}

.v-enter{
  opacity: 0;
}

.v-enter-active{
  transition: all 1s ease-in-out;
}

.v-enter-to{
  opacity: 1;
}
</style>


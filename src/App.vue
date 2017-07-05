<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    browserRedirect: function () {  
      var sUserAgent = navigator.userAgent.toLowerCase();  
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
      var bIsAndroid = sUserAgent.match(/android/i) == "android";  
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
      if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){  
          this.$router.replace('/')
      } else {  
          this.$router.replace('/mobileIndex')
      }  
  }
  },
  created: function(){
  this.browserRedirect()
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

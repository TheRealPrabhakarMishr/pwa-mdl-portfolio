<template>
  <div id="app">
  
  
    <header>
       <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                    <span class="mdl-layout__title">Prabhakar Mishra</span>
                </span>
            </div>
            <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <router-link a class="mdl-navigation__link "  to="/">Portfolio</router-link>
                    <router-link class="mdl-navigation__link"   to="/about">About</router-link>
                    <router-link class="mdl-navigation__link"   to="/contact">Contact</router-link>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                   <router-link  class="mdl-navigation__link "  to="/" @click.native="hideMenu">Portfolio</router-link>
                    <router-link class="mdl-navigation__link"   to="/about" @click.native="hideMenu">About</router-link>
                    <router-link class="mdl-navigation__link"   to="/contact" @click.native="hideMenu">Contact</router-link>
                
            </nav>
        </div>
      <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
      <!-- Footer -->
    <footer class=" text-center" style="color:rgb(85, 85, 85); background-color:#dfdfdf;">
      <div class="container">
        <div class="row d-flex justify-content-center">
         
            <ul class=" fa-2x " style="margin-bottom:0; margin-top:5px;">
              <li class="list-inline-item ">
                <a style="color:grey"  href="">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a style="color:grey" href="">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </li>

              <li class="list-inline-item">
                  <a style="color:grey" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              <li class="list-inline-item">
                <a style=" color:grey" href="">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a style="color:grey" href="">
                  <i class="fab fa-google-plus-square"></i>
                </a>
              </li>
            </ul>
          
        </div>
        <small>Copyright &copy; 2018 Prabhakar Mishra - All Rights Reserved.</small>
      </div>
    
    </footer>

   
 
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-to-top d-lg-none position-fixed ">
      <a class="js-scroll-trigger d-block text-center text-white rounded" href="#app">
        <i class="fas fa-chevron-circle-up"></i>
      </a>
    </div>
    </div>
    </header>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    changePage: function (x) {
      this.currentPage = x
      alert(x)
    },
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
.scroll-to-top {
  z-index: 1042;
  right: 1rem;
  bottom: 1rem;
  display: none;
}

.scroll-to-top a {
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(33, 37, 41, 0.5);
  line-height: 3.1rem;
}



main {
  text-align: center;
  margin-top: 1%;
}

.portfolio-header {
  position: relative;
  background-image: url(../static/img/header-bg.jpg);
}

.portfolio-header .mdl-layout__header-row {
  padding: 0;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.mdl-layout__title {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
}

.is-compact .mdl-layout__title span {
  display: none;
}

.portfolio-logo-row {
  min-height: 200px;
}

.is-compact .portfolio-logo-row {
  min-height: auto;
}

.portfolio-logo {
  background: url(../static/img/logo.png) 50% no-repeat;
  background-size: cover;
  height: 150px;
  width: 150px;
  margin: auto auto 10px;
}

.is-compact .portfolio-logo {
  height: 50px;
  width: 50px;
  margin-top: 7px;
}

.portfolio-navigation-row {
  background-color: rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
  height: 45px;
}

.portfolio-navigation-row  .mdl-navigation {
  text-align: center;
  max-width: 900px;
  width: 100%;
}

.portfolio-navigation-row .mdl-navigation__link {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  line-height: 42px;
}

.portfolio-header .mdl-layout__drawer-button {
    background-color: rgba(197, 197, 197, 0.44);
}

.portfolio-navigation-row .router-link-exact-active {
  position: relative;
  font-weight: bold;
}

.portfolio-navigation-row .router-link-exact-active:after {
  content: "";
  width: 70%;
  height: 2px;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgb(255,64,129);
  left: 15%;
}

.portfolio-card .mdl-card__title {
  padding-bottom: 0;
}

.portfolio-blog-card-full-bg {
  background: url(../static/img/example-blog03.jpg) center / cover;
}

.portfolio-blog-card-event-bg {
  background: url(../static/img/example-blog05.jpg) center / cover;
}

.portfolio-blog-card-strip-bg {
  background: url(../static/img/example-blog06.jpg) center / cover;
}

.portfolio-blog-card-compact .mdl-card__title {
  padding-bottom: 0;
}

.portfolio-blog-card-bg > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}

img.article-image {
  width: 100%;
  height: auto;
}

.portfolio-max-width {
  max-width: 900px;
  margin: auto;
}

.portfolio-copy {
  max-width: 700px;
}

.no-padding {
  padding: 0;
}

.no-left-padding{
  padding-left: 0;
}

.no-bottom-padding {
  padding-bottom: 0;
}

.padding-top {
  padding: 10px 0 0;
}

.portfolio-share-btn {
  position: relative;
  float: right;
  top: -4px;
}

.demo-card-event > .mdl-card__actions {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.portfolio-contact .mdl-textfield {
  width: 100%;
}

.portfolio-contact form {
  max-width: 550px;
  margin: auto;
}




</style>

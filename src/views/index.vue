<template>
    <div>
        <div class="bannerSwipe">
            <swipe :swipes="swipes"></swipe>
        </div>
        <div class="poster">
            <img class="poster__bg" :src="poster.bg">
            <div class="content">
                <div class="content__h1" v-html=" addEnter(poster.h1)"></div>
                <div class="content__des" v-html="addEnter(poster.des)"></div>
                <button class="content__button">{{poster.button}} <img :src="poster.arrowR"></button>
                <div class="content__ad" v-html="addEnter(poster.ad)"></div>
                <div class="ripple">
                    <i></i>
                    <i></i>
                    <i></i>
                    <div class="ripple__button">
                        <img :src="poster.arrowB">
                    </div>
                </div>
            </div>
        </div>
        <div class="reservation">
            <img class="reservation__logo">
            <div class="reservation__h1" v-html=" addEnter(reservation.h1)"></div>
            <div class="reservation__des" v-html=" addEnter(reservation.des)"></div>
            <form>
                <my-select class="reservation__select" :options="reservation.houseOptions"></my-select>
                <my-select class="reservation__select" :options="reservation.areaOptions"></my-select>
                <field :placeholder="reservation.districtPlaceholder" v-model="reservation.value.district"></field>
                <button class="reservation__button" type="submit" @submit.stop.prevent="submitPosition">{{reservation.buttonText}}</button>
            </form>
        </div>
    </div>
</template>
<script>
  import swipe from '../components/swipe.vue';
  import mySelect from '../components/select.vue';
  import { Field } from 'mint-ui';

//  Vue.component(Field.name, Field);

  export default{
	components: {
	  swipe,
	  mySelect,
      Field
	},
	data(){
	  return {
		swipes: [],
		poster: {
		  h1: "VR全屋装||所见即所得",
		  des: "区别于传统装修公司，我们提供整套的||VR全景100%还原未来新家",
		  ad: "360度旋转||VR全套方案||所见即所得",
		  bg: "src/assest/images/vr@3.png",
		  button: "了解更多",
		  arrowR: "src/assest/images/arrowRight.svg",
		  arrowB: "src/assest/images/arrowBottom.svg"
		},
		reservation:{
		  "h1":"现在预约",
          "des":"免费获得客厅VR全景方案",
          houseOptions:[{text:"毛坯房",value:0},{text:"简装房",value:1}],
          areaOptions:[{text:"杭州市",value:0},{text:"广州市",value:0}],
		  districtPlaceholder:"所在小区",
		  buttonText:"现在预约",
		  value:{houseOptions:null,areaOptions:null,district:""},
        }
	  }
	},
	created(){
	  this.getSwipes();
	},
      /*filters: {
       addEnter(value){
       return value.replace(/\|\|/gi, '<br>');
       }
       },*/
	methods: {
	  getSwipes(){
		this.swipes = ['./src/assest/images/banner1@3.png', './src/assest/images/banner2@3.png']
	  },
	  addEnter(value){
		return value.replace(/\|\|/gi, '<br>');
	  },
	  submitPosition(){

      }
	}
  }
</script>
<style lang="scss" scoped="">
    @import '../assest/style/common.scss';

    $color: #333333;

    .bannerSwipe {
        height: rem(420);
    }


    .poster {
        position: relative;
        height: rem(1080);
        &__bg {
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        }
    }
    .content {
        padding-left: rem(104);
        &__h1 {
            font-size: rem(48);
            padding-top: rem(164);
            line-height: rem(78);
            color: $color;
        }
        &__des {
            font-size: rem(32);
            margin: rem(48) 0 rem(88);
        }
        &__ad {
            font-size: rem(32);
        }
        &__button {
            width: rem(240);
            height: rem(64);
            padding: 0;
            margin: 0;
            background: transparent;
            box-sizing: border-box;
            line-height: rem(64);
            border: 1px solid $color;
            border-radius: 18px;
            img {
                height: rem(20);
            }
        }
    }
    .ripple {
        position: relative;
        %ripple {
            width: rem(50);
            height: rem(50);
            border-radius: 50%;
        }
        i {
            @extend %ripple;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            box-sizing: border-box;
            border: 1px solid rgb(57, 213, 194);
        }
        @for $i from 1 through 3{
            i:nth-of-type(#{$i}){
                animation: ripple 2s ease-out ($i - 1)*1s infinite ;
            }
        }
        &__button {
            @extend %ripple;
            background-color: rgb(57, 213, 194);
            text-align: center;
            display: flex;
            img {
                width: rem(20);
                margin: auto;
            }
        }
        @keyframes ripple {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                /*width: rem(250);
                height: rem(250);*/
                transform: scale(4);
            }
        }

    }

    .reservation{
        background-color: rgb(245,245,245);
        padding:rem(72) rem(104) 0;
        text-align: center;
        &__select{
            width: 100%;
            height: rem(80);
            text-align: left;
            margin-bottom: rem(40);
        }
        &__button{
            margin: 0;
            padding: 0;
            width: 100%;
            height: rem(80);
        }
    }
</style>
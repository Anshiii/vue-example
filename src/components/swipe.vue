<script>
  import {Swipe, SwipeItem} from 'mint-ui';
  export default{
	components: {
	  swipe: Swipe,
	  swipeItem: SwipeItem
	},
	props: {swipes: Array},
  }


</script>
<template>
    <swipe class="banner">
        <swipe-item v-for="item in swipes" :key="item">
            <img class="banner__img" :src="item">
        </swipe-item>
    </swipe>
</template>

<style lang="scss" scoped>
    .banner {
        &__img {
            width: 100%;
        }
    }
</style>
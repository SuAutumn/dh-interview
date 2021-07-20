<template>
  <div class="home p-8">
    <div class="left-navs_items fs-5 lh-lg bg-white p-8">
      <router-link class="left-navs_item" to="MyProfile">My Profile</router-link>
      <div class="left-navs_item">Address Book</div>
      <div class="left-navs_item">Booking History</div>
      <div class="left-navs_item">Payments Details</div>
      <div class="left-navs_item">Update Password</div>
      <div class="left-navs_item">Log out</div>
    </div>
    <div class="left-navs_content pl-8">
      <div class="bg-white">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {},
}
</script>

i
<style lang="scss" scoped>
.home {
  overflow: hidden;
  min-height: 100vh;
  max-width: $screen-md;
  margin: 0 auto;
  display: flex;

  .left-navs {
    &_items {
      max-width: $left-navs-width;
      flex-shrink: 0;
    }

    &_item {
      cursor: pointer;
      transition: color .1s;

      &:hover {
        color: $orange;
      }
    }

    &_content {
      flex: 1;
    }
  }
}
</style>

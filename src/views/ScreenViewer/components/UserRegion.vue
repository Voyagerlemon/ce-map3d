<!--
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-23 16:43:29
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-11-25 12:09:44
 * @FilePath: \ce-map3d\src\views\ScreenViewer\components\UserRegion.vue
 * @Description: 用户中心
-->
<template>
  <div class="user flex items-center" id="user">
    <Dropdown @on-click="handleClick" v-if="userInfo">
      <div class="user-block flex items-center">
        <SvgIcon name="user_white" class="text-primary" width="1.2rem" />
        <span class="username">{{ userInfo ? userInfo.userName : "" }}</span>
      </div>
      <DropdownMenu slot="list">
        <DropdownItem name="personal">
          <span class="text-sm">个人中心</span>
        </DropdownItem>
        <DropdownItem name="logout" class="logout">
          <span class="text-sm">退出登录</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Button v-else shape="circle" class="login" type="primary" @click="doLogin">
      登录
    </Button>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.user {
  margin-right: 1.414rem;
  .ivu-dropdown {
    @apply flex items-center h-full cursor-pointer;
  }
  :deep(.ivu-select-dropdown) {
    margin: 0;
    padding: 0.2rem 0;
    top: 3.8rem !important;
    right: 0;
    :deep(.ivu-dropdown-menu) {
      min-width: auto;
      .ivu-dropdown-item {
        height: 1.85rem;
        line-height: 1.85rem;
        padding: 0 1.62rem;
        // @apply text-neutral-3 text-center;
      }
    }
  }
  .login {
    width: 4.17rem;
    height: 2.08rem;
    border-radius: 1.04rem;
    line-height: 0.99rem;
    padding: 0;
   // @apply bg-digit bg-opacity-70 text-primary;
  }
  .svg-icon {
    margin-right: 0.42rem;
  }
}
</style>

<template>
  <div class="donate">
    <div class="donate__header">
      <img src="/donate-background.png" alt="Donate" class="donate__header__image">
    </div>
    <div class="donate__info">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
      <div>
        <h2 class="font-semibold text-lg">Buy me a coffe</h2>
        <p class="font-mono bg-green-200 text-green-600 px-2 -y-1 rounded-md">vivekascoder@okaxis</p>
      </div>
    </div>
    <div class="p-3">
      <p class="border-l-4 border-blue-600 pl-3 font-medium text-blue-600 ">If you wish to donate, you can use the above UPI Id.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donate'
}
</script>

<style lang="postcss" scoped>
.donate {
  @apply overflow-hidden rounded-sm bg-white;
}
.donate__header {
  @apply relative;
}
.donate__header__image {
  @apply h-14 object-cover w-full;
}
.donate__btn {
  @apply rounded-full w-full bg-blue-500 py-2 font-semibold text-xs uppercase tracking-wider text-white focus:outline-none hover:bg-blue-600 focus:ring-2 ring-opacity-30 ring-blue-600;
}
.donate__info {
  @apply p-3 flex space-x-2;
}
.donate__info .content {
  @apply flex-1;
}
.donate__info__upi {
  @apply text-center;
}

</style>
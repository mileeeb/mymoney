<template>
  <div class="p-5 bg-gray-100 min-h-screen relative pb-20">
    <!-- 頂部標題區 -->
    <div class="bg-[#FFE4C4] -mx-5 -mt-5 mb-5 p-5">
      <h1 class="m-0 text-gray-800 text-xl">我的預算</h1>
    </div>


    <!-- 預算概覽卡片 -->
    <div class="bg-white rounded-2xl p-5 mb-5 shadow-md">
      <div class="text-center mb-5">
        <h2 class="text-2xl text-gray-800 m-0">$ 24,000</h2>
        <p class="mt-1 text-gray-600">每月剩餘預算</p>
      </div>

      <div class="flex justify-between gap-2.5">
        <div class="flex-1 bg-gray-50 p-2.5 rounded-lg text-center">
          <h3 class="m-0 text-lg text-gray-800">$ 30,000</h3>
          <p class="mt-1 text-sm text-gray-600">每月總預算</p>
        </div>
        <div class="flex-1 bg-gray-50 p-2.5 rounded-lg text-center">
          <h3 class="m-0 text-lg text-gray-800">$ 6,000</h3>
          <p class="mt-1 text-sm text-gray-600">每月總支出</p>
        </div>
        <div class="flex-1 bg-gray-50 p-2.5 rounded-lg text-center">
          <h3 class="m-0 text-lg text-gray-800">$ 1,000</h3>
          <p class="mt-1 text-sm text-gray-600">今日可使用額度</p>
        </div>
      </div>
    </div>

    <!-- 預算類別列表 -->
    <div class="mb-5">
      <div class="bg-white rounded-lg p-4 mb-2.5 shadow-md">
        <div class="flex justify-between items-center">
          <span class="font-bold">Monthly</span>
          <span class="text-gray-600">$200 / $1,000</span>
          <i class="pi pi-eye text-lg"></i>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4 mb-2.5 shadow-md">
        <div class="flex justify-between items-center">
          <span class="font-bold">Yearly</span>
          <span class="text-gray-600">$200 / $1,000</span>
          <i class="pi pi-eye text-lg"></i>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4 mb-2.5 shadow-md">
        <div class="flex justify-between items-center">
          <span class="font-bold">Goals</span>
          <span class="text-gray-600">$200 / $1,000</span>
          <i class="pi pi-eye text-lg"></i>
        </div>
      </div>
    </div>

    <!-- 底部按鈕組 -->
    <div class="grid grid-cols-3 gap-2.5 mb-5">
      <Button class="w-full flex flex-col items-center gap-1 p-2.5 bg-gray-50 border-none rounded-lg" outlined>
        <i class="pi pi-plus text-lg"></i>
        <span>新增預算</span>
      </Button>
      <Button class="w-full flex flex-col items-center gap-1 p-2.5 bg-gray-50 border-none rounded-lg" outlined>
        <i class="pi pi-file text-lg"></i>
        <span>新增目標群組</span>
      </Button>
      <Button class="w-full flex flex-col items-center gap-1 p-2.5 bg-gray-50 border-none rounded-lg" outlined>
        <i class="pi pi-pencil text-lg"></i>
        <span>編輯列表資訊</span>
      </Button>
    </div>

    <!-- 底部導航欄 -->
    <div class="fixed bottom-0 left-0 right-0 bg-white flex justify-around p-2.5 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div class="flex flex-col items-center text-sm text-[#f4a261]">
        <i class="pi pi-credit-card text-lg"></i>
        <span>Account</span>
      </div>
      <div class="flex flex-col items-center text-sm text-gray-600">
        <i class="pi pi-chart-bar text-lg"></i>
        <span>Budgets</span>
      </div>
      <div class="flex flex-col items-center -mt-7">
        <div
          class="w-[50px] h-[50px] bg-[#f4a261] rounded-full flex items-center justify-center text-white text-2xl shadow-md">
          <i class="pi pi-plus"></i>
        </div>
      </div>
      <div class="flex flex-col items-center text-sm text-gray-600">
        <i class="pi pi-calendar text-lg"></i>
        <span>Scheduled</span>
      </div>
      <div class="flex flex-col items-center text-sm text-gray-600">
        <i class="pi pi-chart-pie text-lg"></i>
        <span>Reports</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>
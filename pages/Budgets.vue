<template>
    <div class="p-5 bg-gray-100 min-h-screen relative pb-20">
        <!-- 頂部標題區 -->
        <div class="bg-[#FFE4C4] -mx-5 -mt-5 mb-5 p-5">
            <h1 class="m-0 text-gray-800 text-xl">我的預算</h1>
        </div>

        <!-- 預算內容 -->
        <div class="mb-20">
            <!-- 這裡放預算相關內容 -->
        </div>

        <!-- 底部導航欄 -->
        <BottomNavBar current-route="Budgets" />
    </div>
</template>

<script setup>
import BottomNavBar from '~/components/BottomNavBar.vue';
</script>

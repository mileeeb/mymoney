<template>
    <div class="fixed bottom-0 left-0 right-0 bg-white flex justify-around p-2.5 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <NuxtLink to="/account" class="flex flex-col items-center text-sm"
            :class="currentRoute === 'Account' ? 'text-[#f4a261]' : 'text-gray-600'">
            <i class="pi pi-credit-card text-lg"></i>
            <span>Account</span>
        </NuxtLink>
        <NuxtLink to="/budgets" class="flex flex-col items-center text-sm"
            :class="currentRoute === 'Budgets' ? 'text-[#f4a261]' : 'text-gray-600'">
            <i class="pi pi-chart-bar text-lg"></i>
            <span>Budgets</span>
        </NuxtLink>
        <div class="flex flex-col items-center -mt-7">
            <div
                class="w-[50px] h-[50px] bg-[#f4a261] rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                <i class="pi pi-plus"></i>
            </div>
        </div>
        <NuxtLink to="/calendar" class="flex flex-col items-center text-sm"
            :class="currentRoute === 'Calendar' ? 'text-[#f4a261]' : 'text-gray-600'">
            <i class="pi pi-calendar text-lg"></i>
            <span>Calendar</span>
        </NuxtLink>
        <NuxtLink to="/reports" class="flex flex-col items-center text-sm"
            :class="currentRoute === 'Reports' ? 'text-[#f4a261]' : 'text-gray-600'">
            <i class="pi pi-chart-pie text-lg"></i>
            <span>Reports</span>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    currentRoute: {
        type: String,
        required: true
    }
});
</script>
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
      <BudgetAccordionItem v-for="(category, index) in budgetCategories" :key="index" :title="category.title"
        :amount="category.amount" :total="category.total" :items="category.items" :is-editing="isEditing"
        @edit="handleEditBudget" @delete="handleDeleteBudget" />
    </div>

    <!-- 底部按鈕組 -->
    <div class="grid grid-cols-3 gap-2.5 mb-5">
      <Button class="w-full flex flex-col items-center gap-1 p-2.5 bg-gray-50 border-none rounded-lg" outlined
        @click="showAddBudgetModal = true">
        <i class="pi pi-plus text-lg"></i>
        <span>新增預算</span>
      </Button>
      <Button class="w-full flex flex-col items-center gap-1 p-2.5 bg-gray-50 border-none rounded-lg" outlined
        @click="showAddGroupModal = true">
        <i class="pi pi-file text-lg"></i>
        <span>新增目標群組</span>
      </Button>
      <Button class="w-full flex flex-col items-center gap-1 p-2.5 bg-gray-50 border-none rounded-lg" outlined
        @click="toggleEditing">
        <i class="pi pi-pencil text-lg"></i>
        <span>{{ isEditing ? '儲存編輯內容' : '編輯列表資訊' }}</span>
      </Button>
    </div>

    <!-- 使用新的底部導航欄組件 -->
    <BottomNavBar current-route="Account" />

    <!-- 新增預算彈出視窗 -->
    <AddBudgetModal v-model:visible="showAddBudgetModal" @save="handleSaveBudget" />

    <!-- 新增群組彈出視窗 -->
    <AddGroupModal v-model:visible="showAddGroupModal" @save="handleSaveGroup" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import BottomNavBar from '~/components/BottomNavBar.vue';
import AddBudgetModal from '~/components/AddBudgetModal.vue';
import AddGroupModal from '~/components/AddGroupModal.vue';
import BudgetAccordionItem from '~/components/BudgetAccordionItem.vue';

const showAddBudgetModal = ref(false);
const showAddGroupModal = ref(false);
const isEditing = ref(false);

// 定義預設值
const budgetInitialData = {
  name: '每月生活費',
  amount: 30000,
  group: { name: '生活費用' },
  icon: { name: '餐飲', icon: 'pi-shopping-cart' },
  isRecurring: true,
  frequency: 1,
  period: { name: '每月' }
};

const budgetCategories = ref([
  {
    title: 'Monthly',
    amount: '$200',
    total: '$1,000',
    items: [
      { id: 1, name: '食物', amount: '$500' },
      { id: 2, name: '交通', amount: '$300' }
    ]
  },
  {
    title: 'Yearly',
    amount: '$200',
    total: '$1,000',
    items: [
      { id: 3, name: '保險', amount: '$1200' },
      { id: 4, name: '稅金', amount: '$2000' }
    ]
  },
  // ... 其他類別
]);

const handleSaveBudget = (budgetData) => {
  console.log('儲存預算:', budgetData);
  // 這裡處理儲存預算的邏輯
};

const handleEditBudget = (item) => {
  // 處理編輯邏輯
  console.log('Edit budget:', item);
};

const handleDeleteBudget = (item) => {
  // 處理刪除邏輯
  console.log('Delete budget:', item);
};

const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};

const handleSaveGroup = (groupData) => {
  console.log('儲存群組:', groupData);
  // 這裡處理儲存群組的邏輯
};
</script>
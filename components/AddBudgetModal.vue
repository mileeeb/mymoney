<template>
    <Dialog :visible="visible" @update:visible="$emit('update:visible', $event)" modal header="增加預算進度條"
        :style="{ width: '90vw' }" class="p-fluid">
        <div class="p-4">
            <h2 class="text-xl mb-6">新增預算內容</h2>

            <div class="mb-4">
                <label class="block mb-2">名稱</label>
                <InputText v-model="formData.name" placeholder="輸入預算名稱" />
            </div>

            <div class="mb-4">
                <label class="block mb-2">金額</label>
                <InputNumber v-model="formData.amount" placeholder="輸入金額" mode="currency" currency="TWD" />
            </div>

            <div class="mb-4">
                <label class="block mb-2">群組</label>
                <Dropdown v-model="formData.group" :options="groupOptions" optionLabel="name" placeholder="選擇群組" />
            </div>

            <div class="mb-4">
                <label class="block mb-2">icon</label>
                <Dropdown v-model="formData.icon" :options="iconOptions" optionLabel="name" placeholder="選擇圖示" />
            </div>

            <div class="mb-4">
                <label class="block mb-2">重複</label>
                <ToggleButton v-model="formData.isRecurring" onLabel="是" offLabel="否" />
            </div>

            <div class="mb-4" v-if="formData.isRecurring">
                <label class="block mb-2">頻率</label>
                <div class="flex items-center gap-2">
                    <InputNumber v-model="formData.frequency" placeholder="次數" />
                    <Dropdown v-model="formData.period" :options="periodOptions" optionLabel="name" placeholder="週期" />
                </div>
            </div>

            <div class="mb-4">
                <label class="block mb-2">顏色</label>
                <ColorPicker v-model="formData.color" />
            </div>
        </div>

        <template #footer>
            <div class="flex justify-between">
                <Button label="取消" @click="closeModal" text />
                <Button label="Save" @click="handleSave" />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import ToggleButton from 'primevue/togglebutton';
import Button from 'primevue/button';
import ColorPicker from './ColorPicker.vue';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    initialData: {
        type: Object,
        default: () => ({
            name: '',
            amount: null,
            group: null,
            icon: null,
            isRecurring: false,
            frequency: 1,
            period: null,
            color: '#3b82f6'
        })
    }
});

const emit = defineEmits(['update:visible', 'save']);

// 將初始表單數據設置為 props 中的值
const defaultFormData = {
    name: '',
    amount: null,
    group: null,
    icon: null,
    isRecurring: false,
    frequency: 1,
    period: null,
    color: '#3b82f6'
};

const formData = reactive({ ...defaultFormData });

// 監聽 initialData 的變化，當有新的預設值時更新表單
watch(() => props.initialData, (newValue) => {
    if (newValue) {
        Object.assign(formData, newValue);
    }
}, { immediate: true }); // immediate: true 確保組件初始化時也會執行

// 示例選項數據
const groupOptions = [
    { name: '生活費用' },
    { name: '娛樂' },
    { name: '交通' }
];

const iconOptions = [
    { name: '餐飲', icon: 'pi-shopping-cart' },
    { name: '交通', icon: 'pi-car' },
    { name: '娛樂', icon: 'pi-ticket' }
];

const periodOptions = [
    { name: '每天' },
    { name: '每週' },
    { name: '每月' },
    { name: '每年' }
];

const resetForm = () => {
    // 重置所有表單字段到初始狀態
    Object.assign(formData, defaultFormData);
};

const closeModal = () => {
    emit('update:visible', false);
    resetForm(); // 關閉時也重置表單
};

const handleSave = () => {
    emit('save', formData);
    closeModal(); // closeModal 會同時處理關閉和重置
};
</script>
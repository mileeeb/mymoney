<template>
    <Dialog :visible="visible" @update:visible="$emit('update:visible', $event)" modal header="增加預算群組"
        :style="{ width: '90vw' }" class="p-fluid">
        <div class="p-4">
            <div class="mb-4">
                <label class="block mb-2">名稱</label>
                <InputText v-model="formData.name" placeholder="輸入群組名稱" />
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
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ColorPicker from './ColorPicker.vue';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['update:visible', 'save']);

const formData = reactive({
    name: '',
    color: '#3b82f6'
});

const closeModal = () => {
    emit('update:visible', false);
    formData.name = '';
    formData.color = '#3b82f6';
};

const handleSave = () => {
    emit('save', { ...formData });
    closeModal();
};
</script>
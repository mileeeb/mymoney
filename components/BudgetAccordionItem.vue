<template>
    <div class="bg-white rounded-lg p-4 mb-2.5 shadow-md">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <i :class="['pi', expanded ? 'pi-chevron-down' : 'pi-chevron-right']" @click="toggleExpand"></i>
                <span class="font-bold">{{ title }}</span>
            </div>
            <div class="flex items-center gap-4">
                <div class="bg-blue-100 px-3 py-1 rounded-full">
                    <span class="text-gray-600">
                        {{ isVisible ? `${amount} / ${total}` : '****' }}
                    </span>
                </div>
                <VisibilityToggle v-model="isVisible" />
            </div>
        </div>

        <div v-if="expanded" class="mt-4 space-y-2">
            <div v-for="item in items" :key="item.id" class="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span>{{ item.name }}</span>
                <div class="flex items-center gap-2">
                    <div class="w-32 bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-500 h-2 rounded-full"
                            :style="{ width: `${(parseFloat(item.amount) / parseFloat(item.total) * 100)}%` }">
                        </div>
                    </div>
                    <span>{{ isVisible ? `${item.amount} / ${item.total}` : '****' }}</span>
                    <div v-if="isEditing" class="flex gap-2">
                        <i class="pi pi-pencil cursor-pointer" @click="$emit('edit', item)"></i>
                        <i class="pi pi-trash cursor-pointer" @click="$emit('delete', item)"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VisibilityToggle from './VisibilityToggle.vue';

const props = defineProps({
    title: String,
    amount: String,
    total: String,
    items: Array,
    isEditing: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['edit', 'delete']);

const expanded = ref(false);
const isVisible = ref(true);

const toggleExpand = () => {
    expanded.value = !expanded.value;
};
</script>
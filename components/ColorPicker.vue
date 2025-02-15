<template>
    <div class="flex gap-2 flex-wrap">
        <div v-for="color in colors" :key="color" :class="[
            'w-8 h-8 rounded-full cursor-pointer',
            'hover:ring-2 hover:ring-offset-2',
            modelValue === color ? 'ring-2 ring-offset-2' : ''
        ]" :style="{ backgroundColor: color }" @click="$emit('update:modelValue', color)">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const colors = [
    '#ef4444', // red
    '#f97316', // orange
    '#eab308', // yellow
    '#22c55e', // green
    '#3b82f6', // blue
    '#a855f7', // purple
    '#71717a', // gray
    '#e5e5e5', // light gray
];
</script>
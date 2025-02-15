<template>
    <i :class="['pi', modelValue ? 'pi-eye' : 'pi-eye-slash', 'text-lg cursor-pointer']"
        @click="$emit('update:modelValue', !modelValue)"></i>
</template>

<script setup>
defineProps({
    modelValue: Boolean
});

defineEmits(['update:modelValue']);
</script>
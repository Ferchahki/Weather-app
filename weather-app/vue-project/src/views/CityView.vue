<template>
    <div>
    <Suspense>
        <AsyncCityView/>
        <template #fallback>
            <p>Searching...</p>
        </template>
    </Suspense>
    </div>
</template>

<script setup>
import AsyncCityView from '../components/AsyncCityView.vue';

</script>

<style lang="scss" scoped>

</style>
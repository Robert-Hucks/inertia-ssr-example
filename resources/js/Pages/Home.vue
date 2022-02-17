<template>
    <div>
        <Head title="Home page!" />
        <h1>Home</h1>
        <Link href="/about">About</Link>
        <Link href="/cropper">Cropper</Link>
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue';

export default {
    components: {
        Head,
        Link,
    }
}
</script>
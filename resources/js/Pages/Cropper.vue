<template>
    <div>
        <Head title="Cropper page!" />
        <h1>Cropper</h1>
        <Link href="/">Home</Link>

        <cropper
            :src="img"
        />
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
    components: {
        Head,
        Link,
        Cropper,
    },
    data() {
        return {
            img: 'https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg',
        };
    },
}
</script>
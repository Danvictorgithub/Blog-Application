<script setup>
    import Editor from '@tinymce/tinymce-vue';
    import DefaultBlogImage from "../../assets/blogPostImage.jpg";
    import axios from "axios";
    import { useAPI } from '../../data/state';
    import {ref , watch} from 'vue';
    const APIStore = useAPI();
    const props = defineProps({
        initContent: {type:String},
    });
    const content = ref(props.initContent);
    const emit = defineEmits(['tinymcecontent']);

    watch(content, (newContent) => emit('tinymcecontent', newContent)); //Passes contentValue to parent

    function uploadImage(file) {
        // Uploads Imaged to Firebase
        const formData = new FormData();
        formData.append("img", file);
        return (axios.post(`${APIStore.API}posts/imageHandler`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.data))
        .catch(err => {
            if (err.response) {
                alert("Image File too Heavy");
                return null;
            }
            else if (err.request) {
                alert("Unable to communicated with server, Please Try again Later");
                return null;
            }
        });
    }
    function handleFilePicker(callback,value,meta) {
        // Allows TinyMCE to receive inputs
        const input = document.createElement('input');
        input.setAttribute('type','file');
        input.setAttribute('accept','image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = async () => {
            const response = await uploadImage(file);
            callback(response.img);
        }
        }
    }
</script>
<template>
    <Editor
    v-model="content"
    api-key="7hxu0lcdg2vy8mrpu83h4e7s8vtyonpuoms3m62xomrzpybo"
    :init="{
    min_height: 1000,
    plugins: 'lists link image table code help wordcount autoresize',
    image_list: [
        { title: 'Default Blog Image', value: DefaultBlogImage },
        ],
    a11y_advanced_options: true,
    file_picker_callback:handleFilePicker
    }"
    :initialValue="initContent"
    />
</template>
<style scoped>
</style>

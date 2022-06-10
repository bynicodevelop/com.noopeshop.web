import _ from 'lodash';

export const useCreateProduct = () => {
    const id = ref("");
    const title = ref("Product Title");
    const description = ref("Description");
    const urlSource = ref("https://nico-develop.com");
    const media = ref(null);


    const onCreate = async () => {
        await $fetch(`/api/v1/products`, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: {
                id: id.value,
                title: title.value,
                description: description.value,
                urlSource: urlSource.value,
                media: media.value
            }
        });
    }

    return {
        title,
        description,
        urlSource,
        media,
        onCreate,
    }
}
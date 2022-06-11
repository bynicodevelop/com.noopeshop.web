import _ from 'lodash';

export const useProducts = () => {
    const id = ref("");
    const title = ref("");
    const description = ref("");
    const urlSource = ref("");
    const media = ref(null);

    const onLoadAll = async () => {
        const { data } = await useFetch(`/api/v1/products`);

        return data.value;
    }


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
        onLoadAll,
        onCreate,
    }
}
export const useOptin = () => {
    const { $tracker } = useNuxtApp();
    const router = useRouter();
    const { success } = useNotification();

    const email = ref('');

    const onSubmit = async (): Promise<void> => {
        await useFetch(`/api/subscriber`, {
            method: 'POST',
            body: {
                email: email.value,
            },
        });

        success('Votre inscription a bien été prise en compte.', 'Félicitations ! 🎉');

        $tracker.lead();

        router.push({
            name: 'thanks',
        })
    };

    return {
        email,
        onSubmit,
    }
}
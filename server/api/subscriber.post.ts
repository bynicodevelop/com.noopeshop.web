import { firestore } from "~~/utils/firebase";
import { sendEmail } from "~~/utils/api/mailing/sparkpost";

const { PRIVACY_EMAIL, GOOGLE_PLAY_URL } = useRuntimeConfig();

const emailTemplate = async (recipientEmail: string[], data: any) => {
    const { link } = data;

    await sendEmail({
        from: `NoopEshop <${PRIVACY_EMAIL}>`,
        subject: 'Téléchargez votre application',
        html: `<html><body><p>Bonjour,</p><p>Voici votre accès à l'application NoopEshop : <a href='${link}'>Télécharger l'application</a></p><p>N'hésitez pas à nous faire vos retours. Même par e-mail. Nous adorons vous lire.</p><p>Cordialement,</p><p>L'équipe NoopEshop</body></html>`
    }, recipientEmail);
}

export default defineEventHandler(async (event) => {
    const { email } = await useBody(event);

    const subscriberDocumentSnapshot = await firestore.collection("subscribers").where("email", "==", email).get();

    if (subscriberDocumentSnapshot.empty) {
        await firestore.collection("subscribers").add({
            email,
            createdAt: new Date(),
        });
    }


    await emailTemplate([email], {
        link: GOOGLE_PLAY_URL
    });

    return {
        email,
    }
})
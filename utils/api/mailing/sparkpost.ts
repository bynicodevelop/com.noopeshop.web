import SparkPost from "sparkpost"

const { SPARKPOST_API_KEY } = useRuntimeConfig();

const options = {
    endpoint: 'https://api.eu.sparkpost.com:443'
};

const client = new SparkPost(SPARKPOST_API_KEY, options);

export const sendEmail = async (template: { from: string, subject: string, html: string }, emails: string[]): Promise<void> => {
    await client.transmissions.send({
        content: template,
        recipients: emails.map(email => ({ address: email }))
    })
} 
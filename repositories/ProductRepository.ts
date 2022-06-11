import { firestore } from '~~/utils/firebase';

export class ProductRepository {
    async getAll() {
        const products = await firestore.collection('products').get();

        return products.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
    }

    async create(data: { title: string, description: string, urlSource: string, media: string }) {
        const productRef = await firestore.collection('products').add(data);

        return productRef.id;
    }
}
import { firestore } from '~~/utils/firebase';

export class ProductRepository {
    async create(data: { title: string, description: string, urlSource: string, media: string }) {
        const productRef = await firestore.collection('products').add(data);

        return productRef.id;
    }
}
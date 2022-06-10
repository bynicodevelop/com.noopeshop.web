import { storage, firestore } from '~~/utils/firebase';
import md5 from 'md5';

export class MediaRepository {
    _getFileName(file: { name: string }) {
        return `${md5(file.name + new Date().toISOString())}.${file.name.split('.').pop()}`;
    };

    async upload(file: { data: string, name: string, type: string, size: number }): Promise<string> {
        const fileName = this._getFileName(file);

        const pathFile = `products/medias/${fileName}`;

        const imageBuffer = Buffer.from(file.data.split(',')[1], 'base64');

        await storage.bucket().file(pathFile).save(imageBuffer, {
            metadata: {
                contentType: file.type,
            },
        });

        return pathFile;
    }
}
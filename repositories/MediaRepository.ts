import { storage, logger } from '~~/utils/firebase';
import md5 from 'md5';

export class MediaRepository {
    _getFileName(file: { name: string }) {
        return `${md5(file.name + new Date().toISOString())}.${file.name.split('.').pop()}`;
    }

    async upload(file: { data: string, name: string, type: string, size: number }): Promise<string> {
        logger.info(`Prepare file ${file.name}`);

        const fileName = this._getFileName(file);

        const pathFile = `products/medias/${fileName}`;

        const imageBuffer = Buffer.from(file.data.split(',')[1], 'base64');

        logger.info('Uploading file to storage');
        await storage.bucket().file(pathFile).save(imageBuffer, {
            metadata: {
                contentType: file.type,
                cacheControl: 'public, max-age=31536000',
                contentDisposition: `inline; filename="${fileName}"`
            }
        });

        logger.info(`File ${file.name} uploaded`, { path: pathFile });
        return pathFile;
    }
}
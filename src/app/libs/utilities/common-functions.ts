import { Observable } from "rxjs";
import { HttpClient, HttpXhrBackend } from "@angular/common/http";


export class SysFunctions {

    private static httpClient: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

    private static WB_IMG_SIZES: any = {
        'PROFILE_PICTURE': { width: 640, height: 640, ratio: 1 },
        'PROFILE_COVER': { width: 1200, height: 400, ration: 3 },
        'PAGE_PICTURE': { width: 640, height: 640, ratio: 1 },
        'PAGE_COVER': { width: 1200, height: 400, ration: 3 },
        'POST_IMAGE': { width: 1200, height: 700, ration: 3 },
        'MESSAGE_IMAGE': { width: 800, height: 700, ration: 3 },
        'AD_IMAGE': { width: 800, height: 700, ration: 3 },
    };

    constructor() { }

    public static BlobtoDataURL(blob: Blob): Promise<any> {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = function () {
                resolve(reader.result);
            }
            reader.readAsDataURL(blob);
        });
    }

    public static ImageUrlToBlob(url: string): Observable<Blob> {
        return SysFunctions.httpClient
            .get(`${url}`, {
                responseType: "blob"
            });
    }

    public static DataUrlToFile(ImageURL: string): File {

        //var ImageURL = "data:image/gif;base64,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";
        // Split the base64 string in data and contentType
        var block = ImageURL.split(";");
        // Get the content type of the image
        var contentType = block[0].split(":")[1];// In this case "image/gif"
        // get the real base64 content of the file
        var imageBase64 = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
        var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

        // Naming the image
        const date = new Date().valueOf();
        let text = '';
        const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
        }
        // Replace extension according to your media type
        const imageName = date + '-' + text + '.' + contentType.split("/")[1];
        //contentType = 'image/jpeg';

        // Convert it to a blob
        //var blob = this.b64toBlob(realData, contentType);
        var blob = SysFunctions.dataURItoBlob(ImageURL);

        var file = new File([blob], imageName, { type: blob.type });
        return file;
    }


    public static dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        //New Code
        return new Blob([ab], { type: mimeString });
    }

    public static removeLinkProtocol(link: string): string {
        return link.replace('http://', '').replace('https://', '');
    }

    public static insertLinkProtocol(link: string): string {
        var http = 'http://';
        var https = 'https://';
        if (link.indexOf('http://') === -1 && link.indexOf('https://') === -1) {
            return http + '' + link;
        }
        return link;
    }

    public static dateDMY_to_MDY(value: string, delimeter: string) {
        console.log(value);
        let date = value.split(delimeter);
        var day = date[0];
        var month = date[1];
        var year = date[2];
        return '' + month + '/' + day + '/' + year + '';
    }



    public static ucwords(str: string) {
        var text = str.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    /*
public static b64toBlob(b64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
*/

    public static getImageCompressionRates(imageDataUrl: string, pictureType: string): Promise<any> {

        var promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
            function (resolve, reject) {

                var sourceImage = new Image();
                // important for safari: we need to wait for onload event
                sourceImage.onload = (
                    /**
                     * @return {?}
                     */
                    function () {
                        var w;
                        var h;
                        var wh_ratio;
                        var img_size = null;
                        w = sourceImage.naturalWidth;
                        h = sourceImage.naturalHeight;
                        wh_ratio = w / h;

                        var imgFile = SysFunctions.DataUrlToFile(imageDataUrl);
                        img_size = Math.round(imgFile.size / 1024);
                        console.log(img_size);
                        var result = SysFunctions.getCompressRatios(w, h, img_size, pictureType);
                        resolve(result);
                    });
                sourceImage.src = imageDataUrl;
            }));
        return promise;
    }

    public static getCompressRatios(w: number, h: number, size: number, type: string) {
        var img_type = null;
        var ratio = 99;
        var quality = 95;
        var new_image_size = null
        if (SysFunctions.WB_IMG_SIZES[type] != undefined) {
            img_type = SysFunctions.WB_IMG_SIZES[type];
            if (w > img_type.width) {
                ratio = Math.round((img_type.width / w) * 100);
            } else {
                ratio = 99;
            }
        }

        /** Due to Simple Research every 1% loss in pixel equals to 0.7586% loss in file size
         * so some of the size will have alread lost in imeze resizing thus
        */
        if (ratio < 99) {
            new_image_size = ((ratio * 0.5) / 100) * size;
        } else {
            new_image_size = size;
        }
        console.log(new_image_size);
        if (new_image_size != null && new_image_size > 300) {
            quality = Math.round((300 / new_image_size) * 100);
        }
        console.log({ ratio: ratio, quality: quality });
        return { ratio: ratio, quality: quality }
    }

    public static getImageOrientation(file: File): Promise<any> {
        var promise = new Promise<number | undefined>(resolve => {
            const reader = new FileReader();

            reader.onload = () => resolve((() => {
                const view = new DataView(reader.result as ArrayBuffer);

                if (view.getUint16(0, false) != 0xFFD8) {
                    return;
                }

                const length = view.byteLength;

                let offset = 2;

                while (offset < length) {
                    const marker = view.getUint16(offset, false);

                    offset += 2;

                    if (marker == 0xFFE1) {
                        offset += 2;

                        if (view.getUint32(offset, false) != 0x45786966) {
                            return;
                        }

                        offset += 6;

                        const little = view.getUint16(offset, false) == 0x4949;

                        offset += view.getUint32(offset + 4, little);

                        const tags = view.getUint16(offset, little);

                        offset += 2;

                        for (var i = 0; i < tags; i++) {
                            if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                                return view.getUint16(offset + (i * 12) + 8, little);
                            }
                        }
                    } else if ((marker & 0xFF00) != 0xFF00) {
                        break;
                    } else {
                        offset += view.getUint16(offset, false);
                    }
                }
            })());

            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));

        });

        return promise;
    }


}
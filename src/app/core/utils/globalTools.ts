
import { ElementRef } from "@angular/core";
import _ from 'lodash';
import { differenceInMilliseconds } from 'date-fns';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { UrlRegexGlobal, EmailRegex, EmailRegexGlobal } from "./regex";
import { environment } from "../../../environments/environment";

export function getFileExtension(filename: string): string {
    return filename.substring(filename.lastIndexOf('.') + 1) || '';
}



export function focusOnInputElementRef(child: ElementRef): void {
    const item = child?.nativeElement as HTMLInputElement;
    if (item) {
        item.focus();
    }
}


export async function forLoop() {
    const list = [1, 2, 200, 43, 87, 98];

    /* 
    01- for loop
      - you can use 'for loop' with return, but within function (function only for loop). 'loop' not displayed
      - async functions
    */
    // for (let i = 0; i < list.length; i++) {
    //   await delay(500);
    //   if (i == 2) {
    //     !environment.production && console.log(list[i]);
    //     return;
    //   }
    //   !environment.production && console.log(list[i]);
    // }


    /* 
    02- forEach
      - you can use return with shoulSkip, but it continue loop. 'loop' displayed
      - async functions but within loop. let it alone within async function
    */
    // let shouldSkip = false;
    // list.forEach(async (item: any) => {
    //   await delay(500);
    //   if (shouldSkip) {
    //     return;
    //   }
    //   if (item == 200) {
    //     shouldSkip = true;
    //     !environment.production && console.log(item);
    //   }
    //   !environment.production && console.log(item);
    // });


    /* 
   03- for (let item of list)
     - you can use return with shoulSkip, but it continue loop. 'loop' displayed
     - async functions but within loop. let it alone within async function
   */
    for (let item of list) {
        // await delay(500);
        if (item == 2) {
            !environment.production && console.log(item);
            return;
        }
        !environment.production && console.log(item);
    }

    !environment.production && console.log('loop');
}



export function isImage(type: string): boolean {
    // const typesList = ['image/png', 'image/jpeg', 'image/x-bmp', 'image/gif', 'image/bmp', 'image/svg+xml', 'image/x-icon', 'image/webp'];
    const typesList = ['image/png', 'image/jpeg', 'image/x-bmp', 'image/gif', 'image/bmp', 'image/webp'];
    return typesList.includes(type) ? true : false;
}

export function calculateFilesSize(filesList: any): number {
    let size = 0;
    if (filesList?.length) {
        size = filesList.reduce((acc: number, item: any) => item.size + acc, 0);
    }
    return size;
}



export function generatePassword(passwordLength: number): string {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const allChars = numberChars + upperChars + lowerChars;
    let randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map((x) => {
        return x[Math.floor(Math.random() * x.length)];
    })).join('');
}

export function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// Get the Date
export function getDateString(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const hour = `${date.getHours()}`.padStart(2, '0');
    const minute = `${date.getMinutes()}`.padStart(2, '0');
    const second = `${date.getSeconds()}`.padStart(2, '0');
    return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
}

// Get the Date without Time
export function getDateWithoutTimeString(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${day}.${month}.${year}`;
}
// Get the Date with Time
export function getDateWithTimeString(date: Date, railway: boolean): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const hour = railway ? (((date.getHours() > 12 || date.getHours() === 0)) ? Math.abs(date.getHours() - 12) : date.getHours()) : `${date.getHours()}`.padStart(2, '0');
    const minute = `${date.getMinutes()}`.padStart(2, '0');
    const xxx = date.getHours() > 11 ? 'PM' : 'AM';
    return railway ? `${day}.${month}.${year} ${hour}:${minute} ${xxx}` : `${day}.${month}.${year} ${hour}:${minute}`;
}

// If the two Dates have the same day
// haveTwoDatesSameDay(date1: Date, date2: Date): boolean {
//   const d1 = getDateWithoutTimeString(date1);
//   const d2 = getDateWithoutTimeString(date2);
//   return d1 === d2;
// }



export function downloadJSON(data: any, title: string) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${title}.json`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

// focusOnInputByID(itemID: string): void {
//   const item = document.getElementById(itemID) as HTMLInputElement;
//   if (item) {
//     item.focus();
//   }
// }


export function checkEMail(email: string): boolean {
    return email.match(EmailRegex) ? true : false;
    // return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/) ? true : false;
}


export function GetRandomID(): number {
    let num = '' + Math.random().toString(10).slice(2, 9);
    // tslint:disable-next-line: triple-equals
    if (num.slice(0, 1) === '0') {
        num = num.replace('0', '1');
    }
    return +num;
}

export function addRandomIdToList(list: Array<any>, prop: string) {
    let newID: number;
    let index: number;
    if (list?.length) {
        do {
            newID = GetRandomID();
            index = list.findIndex((item: any) => item[prop] === newID);
        } while (index !== -1);
        return newID;
    }
    return GetRandomID();
}

export async function generatePairKey(): Promise<any> {
    return new Promise((resolve, reject) => {
        window.crypto.subtle.generateKey(
            {
                name: "RSA-OAEP",
                modulusLength: 4096,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256"
            },
            true,
            ["encrypt", "decrypt"]
        ).then(async (keyPair) => {
            const exportedPri = await window.crypto.subtle.exportKey(
                "pkcs8",
                keyPair.privateKey as CryptoKey
            );
            // console.log(`-----BEGIN PRIVATE KEY-----\n${window.btoa(self.ab2str(exportedPri))}\n-----END PRIVATE KEY-----`);

            const exportedPub = await window.crypto.subtle.exportKey(
                "spki",
                keyPair.publicKey as CryptoKey
            );
            // console.log(`-----BEGIN PUBLIC KEY-----\n${window.btoa(self.ab2str(exportedPub))}\n-----END PUBLIC KEY-----`);
            resolve({ privateKey: window.btoa(ab2str(exportedPri)), publicKey: window.btoa(ab2str(exportedPub)) });
        });
    });
}

export function toPem(privateKey: any) {
    var b64 = addNewLines(arrayBufferToBase64(privateKey));
    var pem = "-----BEGIN PRIVATE KEY-----\n" + b64 + "-----END PRIVATE KEY-----";

    return pem;
}

export function addNewLines(str: any) {
    var finalString = '';
    while (str.length > 0) {
        finalString += str.substring(0, 64) + '\n';
        str = str.substring(64);
    }

    return finalString;
}

export function arrayBufferToBase64(arrayBuffer: any) {
    var byteArray = new Uint8Array(arrayBuffer);
    var byteString = '';
    for (var i = 0; i < byteArray.byteLength; i++) {
        byteString += String.fromCharCode(byteArray[i]);
    }
    var b64 = window.btoa(byteString);

    return b64;
}



export function sumOfPercentArray(percentArray: any): number {
    let x: number;
    x = 0;
    for (let value of percentArray.values()) {
        x += value;
    }
    return x;
}


export function getKeyMaterial(password: string): any {
    try {
        const enc = new TextEncoder();
        return window.crypto.subtle.importKey(
            'raw',
            enc.encode(password),
            'PBKDF2',
            false,
            ['deriveBits', 'deriveKey']
        );
    } catch (err: any) {
        throw { status: err.status, message: err.message || 'Fehler beim Erstellen des Schlüssels!', logText: 'public:getKeyMaterial:326', object: null };
    }
}

export async function importPublicKey(password: string) {
    return await window.crypto.subtle.importKey(
        "spki",
        stringToArray(window.atob(password)),
        {
            name: "RSA-OAEP",
            hash: "SHA-256",
        },
        true,
        ["encrypt"]
    );
}

export async function importPrivateKey(password: string) {
    return await window.crypto.subtle.importKey(
        "pkcs8",
        stringToArray(window.atob(password)),
        {
            name: "RSA-OAEP",
            hash: "SHA-256",
        },
        true,
        ["decrypt"]
    );
}




export async function encryptStringAES256(key: string, xSalt: string, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!xSalt || !key) {
            reject({ data: data, logText: 'public:665', source: 'public/encryptStringAES256:1' });
            return;
        }
        const salt = new Uint8Array(toUin8Arry(xSalt));
        const decryptedData = new Uint8Array(stringToArray(data));
        getKeyMaterial(key).then(async (res: any) => {
            const xkey = await window.crypto.subtle.deriveKey(
                {
                    name: 'PBKDF2',
                    iterations: 100000,
                    salt,
                    hash: 'SHA-256'
                },
                res,
                { name: 'AES-GCM', length: 256 },
                true,
                ['encrypt', 'decrypt']
            );
            window.crypto.subtle.encrypt({ name: 'AES-GCM', iv: salt }, xkey, decryptedData).then(
                encrypted => {
                    resolve(arrayToString(new Uint8Array(encrypted)));
                })
                .catch(err => {
                    !environment.production ? console.log(err) : null;
                    reject({ error: err, logText: 'public:689', source: 'public/encryptStringAES256:2' });
                });
        });
    });
}


export function fromUin8Arry(u8: any): string {
    return btoa(String.fromCharCode.apply(null, u8));
}

export function toUin8Arry(str: string): any {
    try {
        return atob(str).split('').map((c) => {
            return c.charCodeAt(0);
        }
        );
    }
    catch (err) {
        if (!environment.production) {
            console.error('Error: ', 'public:726 ', ' ', err);
        }
        // Emitters.createFolderError.emit();
        // Emitters.createShareError.emit();
        throw new Error('toUin8Arry');
    }
}

// like str2ab
export function stringToArray(bufferString: string): any {
    try {
        if (bufferString) {
            const arrayBuffer = new ArrayBuffer(bufferString.length);
            let newUint: Uint8Array;
            newUint = new Uint8Array(arrayBuffer);
            for (let i = 0; newUint.length > i; i++) {
                newUint[i] = bufferString.charCodeAt(i);
            }
            return newUint;
        }
    } catch (err: any) {
        throw new Error('stringToArray');
    }
}

// like ab2str
export function arrayToString(bufferValue: any): string {
    const bufferAsString = String.fromCharCode.apply(null, bufferValue);
    return bufferAsString;
}

export function ab2str(buf: any) {
    var byteArray = new Uint8Array(buf);
    var byteString = '';
    for (var i = 0; i < byteArray.byteLength; i++) {
        byteString += String.fromCharCode(byteArray[i]);
    }
    return byteString;
}

export function sortArray(list: any, attr: string, ascd: boolean): any {
    let array = _.cloneDeep(list);
    if (array[0]?.hasOwnProperty(attr)) {
        array.sort((a: any, b: any) => {
            if (ascd) {
                return a[attr] - b[attr];
            }
            else {
                return b[attr] - a[attr];
            }
        });
        return array;
    }
}

export function sortObjectsArrayByString(list: any, attr: string, ascd: boolean): any {
    let array = _.cloneDeep(list);
    if (array[0]?.hasOwnProperty(attr)) {
        array.sort((a: any, b: any) => {
            if (a[attr]?.toString()?.toLowerCase() < b[attr]?.toString()?.toLowerCase()) {
                return ascd ? -1 : 1;
            }
            if (a[attr]?.toString()?.toLowerCase() > b[attr]?.toString()?.toLowerCase()) {
                return ascd ? 1 : -1;
            }
            return 0;
        });
    }
    return array;
}

export function sortArrayByString(array: any, ascd: boolean): any {
    array.sort((a: any, b: any) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return ascd ? -1 : 1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return ascd ? 1 : -1;
        }
        return 0;
    });
    return array;
}

export function sortArrayByDate(list: any, attr: string, ascd: boolean): any {
    let array = _.cloneDeep(list);
    if (array[0]?.hasOwnProperty(attr)) {
        array.sort((a: any, b: any) => {
            const x = new Date(a[attr]);
            const y = new Date(b[attr]);
            if (ascd) {
                return x.getTime() - y.getTime();
            }
            else {
                return y.getTime() - x.getTime();
            }
        });
    }
    return array;
}

export function logVar(object: any, text: string = '', color: string = 'blue'): void {
    if (!environment.production) {
        console.log(text ? '%c' + text + ' ' : '', text ? 'color:' + color : '', object);
    }
}

export function logVarError(object: any, text: string = ''): void {
    if (!environment.production) {
        console.error(text ? text + ' ' : '', object);
    }
}

export function logTxt(text: string, color: string = 'black'): void {
    if (!environment.production) {
        console.log(text ? '%c' + text + ' ' : '', text ? 'color:' + color : '');
    }
}

export function logTxtError(text: string): void {
    if (!environment.production) {
        console.error(text);
    }
}


export function deleteItemFromList(emoji: any, list: any, property: string) {
    _.remove(list, (item: any) => {
        return emoji[property] == item[property];
    });
}




export function setDuration(days: number, language: any): string {
    if (days === 1) {
        return language?.oneDay || 'one day';
    }
    else if (days === 7) {
        return language?.oneWeek || 'one week';
    }
    else if (days === 30) {
        return language?.oneMonth || 'one month';
    }
    else {
        return `${days} ${language?.days || 'days'}`;
    }
}

export function addClassToElement(htmlElement: HTMLElement, cls: string): void {
    if (htmlElement) {
        htmlElement.classList.add(cls);
    }
}

export function removeClassFromElement(htmlElement: HTMLElement, cls: string): void {
    if (htmlElement) {
        htmlElement.classList.remove(cls);
    }
}

export function removeReadOnly(event: any): void {
    const fdas = event.target as HTMLElement;
    if (fdas.hasAttribute('readonly')) {
        fdas.removeAttribute('readonly');
    }
}

export function addReadOnly(event: any): void {
    const fdas = event.target as HTMLElement;
    if (!fdas.hasAttribute('readonly')) {
        fdas.setAttribute('readonly', 'readonly');
    }
}


export function docOrImage(type: string): string {
    // const imageTypes = ['image/png', 'image/jpeg', 'image/x-bmp', 'image/gif', 'image/bmp', 'image/svg+xml', 'image/x-icon', 'image/webp'];
    const imageTypes = ['image/png', 'image/jpeg', 'image/x-bmp', 'image/gif', 'image/bmp', 'image/webp'];
    const docTypes = ['text/css', 'application/json', 'text/plain', 'text/javascript', 'application/pdf', 'video/mp4'];
    if (imageTypes.includes(type)) {
        return 'image';
    }
    if (docTypes.includes(type)) {
        return 'document';
    }
    return 'unknown';
}

export function mathRound(num: number): number {
    return Math.round(num);
}

export function getNewDateFromString(date: string): Date {
    return new Date(date);
}

export function isDateZero(date: string): boolean {
    if (date) {
        return getNewDateFromString(date).getFullYear() == 1 ? true : false;
    }
    return true;
}


// compareTwoDates(date1: Date, date2: Date): boolean {
//   const d1 = date1.toISOString();
//   const d2 = date2.toISOString();
//   return d1 == d2 ? true : false;
// }

// date1BiggerThanDate2(date1: Date, date2: Date): boolean {
//   return date1.getTime() > date2.getTime() ? true : false;
// }


// sortByLastOnline(array: any): any {
//   array.sort((a: any, b: any) => {
//     if (!a.isOnline && !b.isOnline) {
//       const x = new Date(a.lastOnline);
//       const y = new Date(b.lastOnline);
//       return y.getTime() - x.getTime();
//     }
//   });
//   return array;
// }

export function windowHasVerticalScrollbar(): boolean {
    const xxx = document.body.clientHeight < document.body.scrollHeight;
    return xxx;
}

export function windowHasHorizontalScrollbar(): boolean {
    return document.body.clientWidth < document.body.scrollWidth;
}

// checkIfDivEmpty(id: string): boolean {
//   const item = document.getElementById(id) as HTMLElement;
//   if (item) {
//     return item.children?.length ? false : true;
//   }
//   return true;
// }

export function checkIfHtmlElementTextNotEmpty(text: string): boolean {
    if (text) {
        const sText = text?.trim()?.replace(/&nbsp;/g, '')?.replace(/ /g, '');
        let xDiv = document.createElement('div');
        var template = document.createElement('template');
        template.innerHTML = sText;
        let node = template.content.firstChild;
        if (node) {
            xDiv.appendChild(node);
            return xDiv.innerText?.length ? true : false;
        }
    }
    return false;
    // const xNode = document.getElementById(node) as HTMLElement;
    // if (xNode) {
    //   return xNode.innerText?.length ? true : false;
    // }
}

// checkWidthOfText(child: string): boolean {
//   const childDiv = document.getElementById(child) as HTMLElement;
//   if (childDiv) {
//     return (childDiv.offsetWidth < childDiv.scrollWidth) ? true : false;
//   }
//   return false;
// }

export function checkWidthOfText(child: HTMLElement): boolean {
    if (child) {
        return (child.offsetWidth < child.scrollWidth) ? true : false;
    }
    return false;
}

export function widthOfBlock(item: HTMLElement): number {
    if (item) {
        return item.clientWidth;
    }
    return 0;
}

export function numberOfRepeatByWidth(a: HTMLElement, b: HTMLElement): number {
    if (widthOfBlock(a) && widthOfBlock(b)) {
        const w = Math.floor(widthOfBlock(a) / widthOfBlock(b));
        return w;
    }
    return 0;
}





export function getFilesWebkitDataTransferItems(dataTransferItems: any) {
    function traverseFileTreePromise(item: any, path = '') {
        return new Promise(resolve => {
            if (item.isFile) {
                item.file((file: any) => {
                    file.filePath = path ? path + file.name : '';
                    files.push(file);
                    resolve(file);
                })
            }
            else if (item.isDirectory) {
                let dirReader = item.createReader();
                dirReader.readEntries((entries: any) => {
                    let entriesPromises = [];
                    for (let entr of entries) {
                        entriesPromises.push(traverseFileTreePromise(entr, path + item.name + "/"));
                    }
                    resolve(Promise.all(entriesPromises));
                })
            }
        })
    }

    let files: any = [];
    return new Promise((resolve, reject) => {
        let entriesPromises = [];
        for (let it of dataTransferItems) {
            entriesPromises.push(traverseFileTreePromise(it.webkitGetAsEntry()));
        }
        Promise.all(entriesPromises)
            .then(entries => {
                //console.log(entries)
                resolve(files);
            });
    });
}


export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return { required: true };
        } else if (!checkEMail(control.value.trim())) {
            return { email: true, error: true };
        }
        return null;
    };
}

export function noSpacesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const hasSpace = /\s/.test(control.value);
        return hasSpace ? { noSpaces: true } : null;
    };
}

export function topOut(element: any): boolean {
    const el = element.getBoundingClientRect();
    return el.y < 0 ? true : false;
}

export function bottomOut(element: any): boolean {
    const el = element.getBoundingClientRect();
    return el.y + el.height > window.innerHeight ? true : false;
}

export function leftOut(element: any): boolean {
    const el = element.getBoundingClientRect();
    return el.x < 0 ? true : false;
}

export function rightOut(element: any): boolean {
    const el = element.getBoundingClientRect();
    return el.x + el.width > window.innerWidth ? true : false;
}

export function assignArrayToAnother(source: any, dest: any): void {
    source.forEach((element: any) => {
        dest.push(element);
    });
}


export function getFileIconForFilesTreeViewByType(fileType: string) {
    let iconType: string;
    switch (fileType) {
        // case 'application/zip':
        //   iconType = 'file-zip';
        //   break;
        // case 'application/x-zip-compressed':
        //   iconType = 'file-zip';
        //   break;
        case 'application/pdf':
            iconType = 'file-pdf';
            break;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            iconType = 'file-word';
            break;
        case 'application/msword':
            iconType = 'file-word';
            break;
        // case 'text/plain':
        //   iconType = 'file-text';
        //   break;
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            iconType = 'file-ppt';
            break;
        case 'application/vnd.ms-powerpoint':
            iconType = 'file-ppt';
            break;
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            iconType = 'file-excel';
            break;
        case 'application/vnd.ms-excel':
            iconType = 'file-excel';
            break;
        case 'image/png':
            iconType = 'file-image';
            break;
        case 'image/jpeg':
            iconType = 'file-image';
            break;
        case 'image/x-bmp':
            iconType = 'file-image';
            break;
        case 'image/bmp':
            iconType = 'file-image';
            break;
        case 'image/gif':
            iconType = 'file-image';
            break;
        case 'image/x-icon':
            iconType = 'file-image';
            break;
        case 'image/webp':
            iconType = 'file-image';
            break;
        default:
            iconType = 'file';
    }
    return iconType;
}


export function slideInOut(item: HTMLElement, show: boolean): void {
    setTimeout(() => {
        if (item) {
            if (show) {
                item.classList.add('show');
                setTimeout(() => {
                    item.classList.add('fix');
                }, 600);
            }
            else {
                item.classList.remove('fix');
                item.classList.add('hide');
            }
        }
    }, 5);
}

export async function delay(period: number): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, period);
    });
}



export function areEqual(item1: any, item2: any): boolean {
    return _.isEqual(item1, item2) ? true : false;
}

export function getRecipientFromSharedFolderByEmail(recipient: any, list: any) {
    const rec = list.find((item: any) => {
        const itemEmail = item.ident || item.Ident || item.email || item.Email || '';
        const recEmail = recipient.ident || recipient.Ident || recipient.email || recipient.Email || '';
        return recEmail == itemEmail ? true : false;
    });

    return rec ? rec : undefined;
}


export function groupListByPropertyAsList(list: any[], prop: string) {
    let arr: any[] = [];
    if (list?.length) {
        arr = Object.values(_.groupBy(list, prop));
    }
    return arr;
}

export function getUserName(user: any): string {
    if (!user) {
        return '';
    }
    const firstName = user.firstName || user.FirstName || user.Vorname || user.tskUser?.sT_Vorname || '';
    const familyName = user.familyName || user.FamilyName || user.Name1 || user.tskUser?.sT_Name1 || user.tskUser?.sT_Name2 || user.tskUser?.sT_Name3 || '';
    const name = firstName?.concat(' ', familyName);
    const email = user.email || user.Email || user.Ident || user.ident || user.tskUser?.sT_EMail || user.tskUser?.sT_EMail2 || '';
    return name?.trim() || email?.trim() || '';
}

export function getUserEmail(user: any): string {
    if (!user) {
        return '';
    }
    const email = user.email || user.Email || user.Ident || user.ident || user.tskUser?.sT_EMail || user.tskUser?.sT_EMail2 || '';
    return email?.trim() || '';
}

export function getFirstTwoWordsFromText(text: string): string {
    let result: string = '';
    if (!text) {
        return '';
    }
    const list = text.trim().split(' ');
    for (let i = 0; i < 2; i++) {
        result += ' ';
        result += list[i] || '';
    }
    return result?.trim() || '';
}

export function generateEditorArr(list: any[]) {
    let xList: string = '';
    if (list?.length) {
        xList = list.filter((item: any) => item.roleID != 0).map((el: any) => {
            const name = getUserName(el);
            return name?.trim() || '';
        }).join('\n');
    }
    return xList;
}

export function disableEnableFormInput(formControls: any, inputsList: string[], disable: boolean): void {
    if (inputsList?.length) {
        inputsList.forEach(item => {
            disable ? formControls[item].disable() : formControls[item].enable();
        });
    }
}

export function getColorFromElement(element: string) {
    const item = document.querySelector(element) as HTMLElement;
    let colorVal = '';
    if (item) {
        colorVal = getComputedStyle(item)
            .getPropertyValue("color")
            .toString();
    }
    return colorVal;
}

export function doesTextContainOnlyEmojis(text: string): boolean {
    const ranges = ['\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]',
        ' '].join('|');
    const removeEmoji = (str: string) => str?.replace(new RegExp(ranges, 'g'), '');

    return text ? !removeEmoji(text).length : false;
}



export function getRealUrl(url: any) {
    if (!url) {
        return '';
    }
    if (!url.startsWith('ftp://') && !url.startsWith('https://') && !url.startsWith('http://')) {
        return 'https://'.concat('', url);
    }
    return url;
}

export function URLify(text: string, classes: string = '') {
    if (!text) {
        return '';
    }
    const urls = text.match(UrlRegexGlobal);
    const emails = text.match(EmailRegexGlobal);
    if (emails) {
        emails.forEach(function (email) {
            text = classes ? text.replace(email, '<a href="mailto:' + email + '" class="' + classes + '">' + email + "</a>") :
                text.replace(email, '<a href="mailto:' + email + '">' + email + "</a>");
        });
    }

    if (urls) {
        urls.forEach((url: any) => {
            if (!url.match(EmailRegex)) {
                text = classes ? text.replace(url, '<a target="_blank" href="' + getRealUrl(url) + '" class="' + classes + '">' + url + "</a>") :
                    text.replace(url, '<a target="_blank" href="' + getRealUrl(url) + '">' + url + "</a>");
            }
        });
    }

    return text;
}


export function changeFavIcon(iconName: string) {
    if (iconName) {
        const favIcon = document.getElementById('favIcon') as HTMLLinkElement;
        if (favIcon) {
            favIcon.href = iconName;
        }
    }
}

export function maxValueOfNumberArray(list: number[]): number {
    if (list?.length) {
        return _.max(list) || 0;
    }
    return 0;
}

export function isNotUndefinedOrNull(value: any) {
    return !(_.isUndefined(value) || _.isNull(value));
}

export function findParentObject(array: any, targetObject: any) {
    let parentObject: any = null;

    // Rekursive Hilfsfunktion
    function search(array: any, targetObject: any) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (Array.isArray(element)) {
                // Rekursiver Aufruf für Arrays
                parentObject = search(element, targetObject);

                if (parentObject) {
                    return parentObject;
                }
            } else if (typeof element === 'object' && element !== null) {
                // Überprüfung, ob das Objekt das Zielobjekt enthält
                const arr = Object.values(element);
                const found = arr?.includes(targetObject);

                if (found) {
                    parentObject = element;
                    return parentObject;
                }
                arr.forEach(el => {
                    if (Array.isArray(el)) {
                        parentObject = search(el, targetObject);

                        if (parentObject) {
                            return parentObject;
                        }
                    }
                });
            }
        }

        return parentObject;
    }

    // Rekursive Suche starten
    parentObject = search(array, targetObject);
    return parentObject;
}

export function extractContent(s: string) {
    if (!s) {
        return '';
    }
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
};

// testObservable() {
//   let obs = new Observable(observer => {
//     setTimeout(() => {
//       if (false) {
//         observer.next(true);
//       }
//       else {
//         observer.error(false);
//       }
//       observer.complete();
//     }, 1000);
//   });
//   return new Promise((resolve, reject) => {
//     obs.subscribe({
//       next: data => resolve(data),
//       error: err => reject(err)
//     });
//   })
// }

// testPromise(username: string): Promise<any> {
//   const obj = {
//     username: username,
//   }
//   return new Promise((resolve, reject) => {
//     http.post<any>(`${fileswift_Url}/GetSaltByUsername`, obj).pipe().subscribe({
//       next: data => {
//         resolve(data);
//       },
//       error: err => {
//         reject({error: err, logText: 'user:405', show: true, sendMail: true, source: 'user/GetSaltByUsername', object: obj});
//       }
//     });
//   });
// }


export async function encryptDataWithPublicKey(pubKey: any, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
        importPublicKey(pubKey).then((xs: any) => {
            window.crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                xs,
                new TextEncoder().encode(data)
            ).then(decrypted => {
                resolve(window.btoa(ab2str(decrypted)));
            }).catch((err) => {
                resolve(data);
            });
        })
            .catch(err => {
                resolve(data);
            });
    });
}

export async function decryptDataWithPrivateKey(priKey: any, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
        importPrivateKey(priKey).then((xs: any) => {
            var str;
            try {
                str = stringToArray(window.atob(data));
            } catch (err: any) {
                str = stringToArray("");
            }
            window.crypto.subtle.decrypt(
                {
                    name: "RSA-OAEP"
                },
                xs,
                str
            ).then(decrypted => {
                resolve(new TextDecoder().decode(decrypted));
            }).catch((err) => {
                resolve(data);
            });
        });
    });
}

export function searchForFilesOfFolder(folder: any, filesList: Array<any> = []): Array<any> {
    if (folder.fileList?.length) {
        folder.fileList.forEach((child: any) => {
            filesList.push(child);
        });
    }
    if (folder.folderList?.length) {
        folder.folderList.forEach((chFolder: any) => {
            searchForFilesOfFolder(chFolder, filesList);
        });
    }
    return filesList;
}

export function extractUsername(user: string): string {
    const match = user.match(/[A-Za-z]+(?:\s+[A-Za-z]+)+/);
    return match ? match[0] : "";

}



export function cancelTimeout(timeoutId: any) {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
    }
}


export function isJsonString(str: any) {
    try {
        let json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}

export function getItemFromStorage(name: string, session: boolean = false) {
    try {
        const data = session ? sessionStorage.getItem(name) : localStorage.getItem(name);
        if (data) {
            if (isJsonString(data)) {
                return JSON.parse(data);
            }
            return data;
        }
    } catch (error) {
        console.log('getItemFromStorage: ', error);
    }
    return null;
}

export function setItemToStorage(name: string, item: any, session: boolean = false) {
    try {
        session ? sessionStorage.setItem(name, (typeof item === 'string') ? item : JSON.stringify(item)) :
            localStorage.setItem(name, (typeof item === 'string') ? item : JSON.stringify(item));
    } catch (error) {
        console.log('setItemToStorage: ', error);
    }
}

export function removeItemFromStorage(name: string, session: boolean = false) {
    try {
        session ? sessionStorage.removeItem(name) :
            localStorage.removeItem(name);
    } catch (error) {
        console.log('removeItemFromStorage: ', error);
    }
}


export function setCurrentUserAfterLogin(userInfo: any): any {
    const obj = {
        UserID: userInfo.id || userInfo.UserId,
        UserId: userInfo.id || userInfo.UserId,
        Email: userInfo.ident || userInfo.email || userInfo.Email,
        Vorname: userInfo.firstName || userInfo.Vorname,
        Name1: userInfo.familyName || userInfo.Name1 || userInfo.Name2 || userInfo.Name3,
        IsHash: userInfo.isHash,
        TskTyp: userInfo.tskTyp || userInfo.TskTyp,
        UserType: isNotUndefinedOrNull(userInfo.userType) ? userInfo.userType : userInfo.UserType,
        IsTskUser: userInfo.isTskUser || (userInfo.TskNr ? true : false),
        FrontEndHash: userInfo.frontEndHash,
        Anrede: userInfo.anrede || userInfo.Anrede,
        Titel: userInfo.titel || userInfo.Titel,
        LandKuerzel: userInfo.tskAbbr?.toUpperCase() || userInfo.LandKuerzel,
        TskNr: userInfo.tskNr || userInfo.TskNr,
        Token: userInfo.token || userInfo.Token,
        BetrNr: userInfo.betrNr || userInfo.BetrNr,
        twoFactorAuthentication: userInfo.twoFactorAuthentication,
        salt: userInfo.salt || '',
        refCode: userInfo.refCode,
        language: userInfo.language,
        showWelcomeMessage: userInfo.showWelcomeMessage,
        userStatusList: userInfo.userStatusList,
        profilePicture: userInfo.profilePicture || '',
        masterKey: userInfo.masterKey || ''
    }
    return obj;
}
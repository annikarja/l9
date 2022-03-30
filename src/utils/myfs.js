import RNFS from 'react-native-fs';
import { Platform } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const subDir = '/notes/';

export const initPath = () => {
    // logic to initialize path
    new Promise((res) => {
        RNFS.mkdir(getPath()).finally(() => res());
    });
}

// only non-promise function
export const getPath = () => {
    // return path to save dir
    if(Platform.OS === 'android') return RNFS.DocumentDirectoryPath + subDir
    else if(Platform.OS === 'ios') return RNFS.MainBundlePath + subDir
}

export const writeNote = (title, note, format='.txt') => {
    // logic to write note
    return new Promise((res, rej) => {
        // ../path/to/notes/title.format
        const notepath = title.includes(format) ? 
            getPath() + title : 
            getPath() + title + format;
        console.log(title, note, format, notepath);
        RNFS.writeFile(notepath, note)
            .then(() => res())
            .catch((err) => {
                console.log('error at writefile:');
                console.log({err});
                rej()
        });
    })
};

export const readNote = (filename) => {
    // logic to read note
    return new Promise((res, rej) => {
        // ../path/to/notes/filename.txt
        const filepath = getPath() + filename
        RNFS.readFile(filepath)
            .then((fileContent) => res(fileContent))
            .catch((err) => {
                console.log('error reading file');
                console.log({error});
            })
    })
}

export const listNotes = () => {
    // logic to list notes
    return new Promise((res, rej) => {
        RNFS.readDir(getPath())
            .then((items) => {
                console.log(items);
                const notesOnly = [];
                for (const item of items) {
                    if(item.isFile() && item.name.split('.txt')) notesOnly.push(item.name)
                }
                res(notesOnly);
            })
            .catch((err) => {
                console.log({err});
                initPath();
                res([]);
            })
    })
}

export const deleteNote = () => {
    // logic to delete notes
}

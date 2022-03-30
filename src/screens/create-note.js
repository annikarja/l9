import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { writeNote } from '../utils/myfs';

export const CreateNote = () => {
    const _tin = { min: 1, max: 10, format: '.txt' } // min, max title size
    const [ title, titleChange ] = React.useState('');
    const [ content, contentChange ] = React.useState('');

    const save = () => {
        // logic to save file
        if(_tin.min <= title.length <= _tin.max) {
            writeNote(title, content, _tin.format)
                .then(() => console.log('write note successful'))
                .catch(() => console.log('write note failed'))
        } else {
            // handle bad topic
            console.log('bad topic');
            console.log(title, _tin)
        }
    }

    return (<View>
        <Text>create-note</Text>
        <TextInput 
            style={styles.tinput}
            onChangeText={titleChange}
            value={title}
            placeholder='Title here'
        />
        <TextInput 
            style={styles.tarea}
            onChangeText={contentChange}
            value={content}
            placeholder='Content here'
            multiline={true}
        />
        <Button title='Save' onPress={() => save()} />
    </View>);
}

const styles = StyleSheet.create({
    tinput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    tarea: {
        height: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});

export default CreateNote;
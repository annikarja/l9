import React from 'react';
import { View, Text, Button } from 'react-native';
import { listNotes } from '../utils/myfs';

export const MyNotes = ({ navigation }) => {

    const [ notes, setNotes ] = React.useState([]);

    React.useEffect(() => {
        let isSubscribed = true;
        listNotes().then((_notes) => {
            console.log({_notes});
            if (isSubscribed) 
                setNotes(_notes)
        });
        return () => isSubscribed = false;
    }, [])

    const openEditor = (note) => {
        console.log(`open note: ${note}`);
        // logic to navigate to note-editor
        navigation.navigate('note-editor', { filename: note })
    }

    return (<View>
        <Text>my-notes</Text>
        {
            notes.map((note, i) => (<View key={`note-${i}`}>
                <Button title={note} onPress={() => openEditor(note)}></Button>
            </View>))
        }
    </View>);
}

export default MyNotes;
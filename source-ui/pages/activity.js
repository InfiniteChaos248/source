import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default function ActivityTrackerView() {

    const [newActivityView, setNewActivityView] = React.useState(false);
    const [newActivity, setNewActivity] = React.useState({});

    return (
        <View>
            <Text>Activity Tracker</Text>
            {
                !newActivityView ? <Button
                    onPress={() => { setNewActivityView(true) }}
                    title="Log Activity"
                    color="blue"
                /> : <NewActivityView setNewActivityView={setNewActivityView} newActivity={newActivity} setNewActivity={setNewActivity} />
            }
        </View>
    );
}


function NewActivityView(props) {

    let today = new Date();
    const [activity, setActivity] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [datetime, setDatetime] = React.useState(today.toDateString());
    const [comments, setComments] = React.useState('');

    return (
        <View>            
            <TextInput
                style={{ height: 40 }}
                placeholder="activity"
                onChangeText={text => setActivity(text)}
                defaultValue={activity}
            />
            <TextInput
                style={{ height: 40 }}
                placeholder="category"
                onChangeText={text => setCategory(text)}
                defaultValue={category}
            />
            <TextInput
                style={{ height: 40 }}
                onChangeText={text => setDatetime(text)}
                defaultValue={datetime}
            />
            <TextInput
                style={{ height: 40 }}
                placeholder="comments ..."
                onChangeText={text => setComments(text)}
                defaultValue={comments}
            />
            <Button
                onPress={() => { props.setNewActivityView(false) }}
                title="Cancel"
                color="red"
            />
        </View>
    );
}
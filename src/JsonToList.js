import React from 'react';
import { List } from 'semantic-ui-react';

function JsonToList(props) {
    var myObj = JSON.parse(props.jsonData);
    const mainTemplate = <List>{listRender(myObj)}</List>;
    return mainTemplate;
}

function resolveObject(value) {
    if (typeof value === 'object') {
        return <List.List>{listRender(value)}</List.List>;
    } else {
        return <List.Description>
            {value}
        </List.Description>;
    }
}

function listRender(myObj) {
    var template = [];
    var i = 0;
    for (const property in myObj) {
        template[template.length] = <List.Item key={i}>
            <List.Icon name='folder' />
            <List.Content>
                <List.Header>
                    {property}
                </List.Header>
                {resolveObject(myObj[property])}
            </List.Content>
        </List.Item>;
        i += 1;
    }
    return template;
}

export default JsonToList
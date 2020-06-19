import React from 'react';

import { View } from 'react-native';
import NavigationProps from '../../utils/Navigationable';
import { ContactsView } from './style';
import Header from '../../components/Header';

type Props = {
    navigation : any;
}

const Contacts = ( { navigation } : Props) => {
    return (
        <ContactsView>
            <Header navigation={navigation.toggleDrawer}/>
        </ContactsView>
    );
}

export default Contacts;
/**
 * Help Screen
 * @format
 */

import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import According from 'react-native-collapsible/Accordion';

import { Header, SearchBar, Label, Icon } from '@app/components';
import { styles } from './styles';

const data = require('../help-data.json');

const HelpScreen = () => {
  const [activeSection, setActiveAction] = useState<Array<number>>([]);

  const renderHeader = (content: any, index: number, isActive: boolean) => {
    return (
      <View style={styles.headerContainer}>
        <Label style={styles.headerLabel}>{content.question}</Label>

        <Icon
          type="Ionicons"
          name={isActive ? 'chevron-up' : 'chevron-down'}
          style={styles.arrowIconStyle}
        />
      </View>
    );
  };

  const renderContent = (content: any) => {
    return (
      <View style={styles.contentContainer}>
        <Label style={styles.contentLabel}>{content.answer}</Label>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header canAccessDrawer centerLogoShown cartShown />
      <SearchBar />

      <According
        sections={data}
        activeSections={activeSection}
        onChange={setActiveAction}
        renderAsFlatList
        renderHeader={renderHeader}
        renderContent={renderContent}
        expandMultiple={false}
        touchableComponent={TouchableWithoutFeedback}
        containerStyle={styles.scrollViewStyle}
      />
    </View>
  );
};

export default HelpScreen;

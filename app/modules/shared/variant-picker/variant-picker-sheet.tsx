/**
 * Variant picker sheet
 * @format
 */

import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import { View } from 'react-native';

import { Button } from '@app/components';
import { strings } from '@app/strings';
import { styles } from './styles';

type Props = {
  renderContent: () => React.ReactNode;
  selectedVariant: any;
  sheetRef: any;
  onPressDone: () => void;
};

const VariantPickerSheet = (props: Props) => {
  const { sheetRef, renderContent, onPressDone } = props;

  return (
    <ActionSheet ref={sheetRef}>
      <View style={styles.sheetContainer}>{renderContent()}</View>
      <Button
        title={strings.done}
        type="primary"
        containerStyle={styles.closeButtonStyle}
        onPress={onPressDone}
      />
    </ActionSheet>
  );
};

export { VariantPickerSheet };

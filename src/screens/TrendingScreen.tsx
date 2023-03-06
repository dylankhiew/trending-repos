import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  UIManager,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { AccordionList } from 'react-native-accordion-list-view';
import { useSelector } from 'react-redux';

import { NavigationStackParamList } from '../../App';
import { IMAGES } from '../../assets/IMAGES';
import { requestRepoUpdate } from '../actions/reposActions';
import AccordionBody from '../components/AccordionBody';
import AccordionHead from '../components/AccordionHead';
import AccordionHeadSkeleton from '../components/AccordionHeadSkeleton';
import ErrorModule from '../components/ErrorModule';
import HeaderButton from '../components/HeaderButton';
import RefreshIcon from '../components/RefreshIcon';
import SkeletonLoadingModule from '../components/SkeletonLoadingModule';
import { COLOR } from '../constants/colorConstants';
import { SPACING } from '../constants/spacingConstants';
import { TRENDING_SCREEN_CONFIG } from '../constants/trendingScreenConstants';
import {
  repoIsErrorSelector,
  repoIsLoadingSelector,
  trendingReposSelector,
} from '../selectors/reposSelectors';
import { useReduxDispatch } from '../state/store';

type TrendingScreenProps = NativeStackScreenProps<
  NavigationStackParamList,
  'Trending'
>;

export default function TrendingScreen({ navigation }: TrendingScreenProps) {
  const repositories = useSelector(trendingReposSelector);
  const isLoading = useSelector(repoIsLoadingSelector);
  const isError = useSelector(repoIsErrorSelector);

  const dispatch = useReduxDispatch();

  const [offsetY, setOffsetY] = useState(0);

  const [shouldShowRefreshIcon, setShouldShowRefreshIcon] = useState(false);

  useEffect(() => {
    dispatch(
      requestRepoUpdate({
        shouldForceUpdate: false,
      }),
    );

    navigation.setOptions({
      headerRight: () => (
        <HeaderButton imageSource={IMAGES.ICON.MORE_OPTIONS} />
      ),
      headerTitleStyle: styles.header,
    });

    // Initialised for react-native-accordion-list-view
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  useEffect(() => {
    if (offsetY < -TRENDING_SCREEN_CONFIG.REFRESH_OFFSET) {
      setShouldShowRefreshIcon(true);
    } else {
      setShouldShowRefreshIcon(false);
    }
  }, [offsetY]);

  function onScroll({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) {
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    setOffsetY(y);
  }

  const onRelease = () => {
    if (offsetY < -TRENDING_SCREEN_CONFIG.REFRESH_OFFSET) {
      dispatch(
        requestRepoUpdate({
          shouldForceUpdate: true,
        }),
      );
      setOffsetY(0);
    }
  };

  const renderAccordionHead = (repo: app.RepositoryItem) => {
    return <AccordionHead repository={repo} />;
  };

  const renderAccordionBody = (repo: app.RepositoryItem) => {
    return <AccordionBody repository={repo} />;
  };

  const renderRefreshIcon = () => {
    if (shouldShowRefreshIcon) {
      return <RefreshIcon />;
    }
  };

  if (isLoading) {
    return (
      <SkeletonLoadingModule
        component={<AccordionHeadSkeleton />}
        amount={TRENDING_SCREEN_CONFIG.SKELETON_LOADER_AMOUNT}
      />
    );
  }

  if (isError) {
    return (
      <ErrorModule
        title="Something went wrong.."
        imageSource={IMAGES.BACKGROUND.NO_INTERNET_CONNECTION}
        subtitle="An alien is probably blocking your signal."
        buttonTitle="Retry"
        onPress={() => {
          dispatch(
            requestRepoUpdate({
              shouldForceUpdate: true,
            }),
          );
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderRefreshIcon()}
      <AccordionList
        onScroll={onScroll}
        onResponderRelease={onRelease}
        containerItemStyle={styles.accordionItem}
        data={repositories ?? []}
        customTitle={renderAccordionHead}
        customBody={renderAccordionBody}
        style={styles.accordionList}
        animationDuration={TRENDING_SCREEN_CONFIG.ANIMATION_DURATION}
        expandMultiple={false}
        customIcon={() => <></>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: SPACING.S_4,
  },
  header: {
    fontSize: 21,
    marginVertical: 14,
    fontFamily: 'Roboto-Medium',
  },
  accordionList: {
    width: '100%',
    margin: 0,
  },
  accordionItem: {
    margin: 0,
    borderColor: COLOR.GRAY100,
    borderBottomWidth: 1,
    borderRadius: 0,
  },
});

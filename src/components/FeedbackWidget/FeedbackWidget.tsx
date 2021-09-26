import React from 'react';

import classNames from 'classnames';
import { useSelector } from 'react-redux';

import styles from './FeedbackWidget.module.scss';

import Button from 'src/components/dls/Button/Button';
import Link from 'src/components/dls/Link/Link';
import {
  AudioFileStatus,
  selectAudioFileStatus,
  selectIsMobileMinimizedForScrolling,
} from 'src/redux/slices/AudioPlayer/state';

const FeedbackWidget = () => {
  const audioFileStatus = useSelector(selectAudioFileStatus);
  const isMobileMinimizedForScrolling = useSelector(selectIsMobileMinimizedForScrolling);
  const isHidden = audioFileStatus === AudioFileStatus.NoFile;

  return (
    <div
      className={classNames(styles.container, {
        [styles.isMobileMinimizedForScrolling]: isMobileMinimizedForScrolling,
        [styles.audioPlayerOpen]: !isHidden,
      })}
    >
      <Link href="https://feedback.quran.com" newTab>
        <Button>Feedback</Button>
      </Link>
    </div>
  );
};

export default FeedbackWidget;

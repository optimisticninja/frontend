import React from 'react';

import { Typography } from '@mui/material';

import { asciiMe } from '../../constants';
import { StyledPre } from '../atoms';
import { useDocumentTitle } from '../../hooks';

const About = function About(): React.ReactElement {
  useDocumentTitle('About');

  return (
    <>
      <Typography variant="h3">About the author</Typography>
      <Typography paragraph>
        John Holly worked as a software engineer for various companies since his
        early 20s. At the time of writing this, he has about 7 years of
        experience in the industry. He grew up skateboarding, playing guitar,
        and always had a curiosity for science and technology. In his spare time
        he spends most of it reading or writing security/privacy tools and
        almost always with loud music in the background. He deeply believes if
        music or another form of art doesn&#39;t give you a sixth sense for
        emotion, you need to dig deeper.
      </Typography>
      <Typography paragraph>
        His interest in computers and security originated from an early age. He
        felt the need to bypass controls put in place by his father (and
        rightfully so) to monitor and block his network traffic and borderline
        compulsive computer usage. Side-stepping filters and monitors, pulling
        CMOS batteries/moving jumpers to get past the boot password were only a
        few of his exploits before his teen years. Did he get into trouble?
        Sure. Did he learn a lot? Definitely. Early in his teen years, iPods
        (remember those?) had started coming into his life. Never being able to
        afford one, he purchased a broken iPod Photo from eBay and replaced the
        defective components. Soon after, he was modifying and theming the iPod
        firmware/installing Linux. When the iPod Video came out, you can rest
        assured he was playing videos in his Photo&#39;s Linux
        distribution/playing DOOM on it long before its release. The same can
        be said for almost any gadget he encountered over the course of his
        life.
      </Typography>
      <StyledPre>
        {asciiMe}
      </StyledPre>
    </>
  );
};

export default About;

import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
// import { Icon } from '@iconify/react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { useDocumentTitle } from '../../hooks';
import { StyledA } from '../atoms';

const contactLinks = [
  {
    text: 'For development/site-related inquiries',
    extra: [
      {
        icon: <MailIcon />,
        text: 'Email',
        link: 'mailto:j@optimistic.ninja',
      },
      {
        icon: <VpnKeyIcon />,
        text: 'GPG Key',
        // eslint-disable-next-line max-len
        link: 'https://keyserver.ubuntu.com/pks/lookup?search=0x59342A3F4D4FEC4B&fingerprint=on&op=index',
      },
    ],
  },
  {
    text: 'For recruiters or employment inquiries',
    extra: [
      {
        icon: <MailIcon />,
        text: 'Email',
        link: 'mailto:johnholly034@gmail.com',
      },
      {
        icon: <VpnKeyIcon />,
        text: 'GPG Key',
        // eslint-disable-next-line max-len
        link: 'https://keyserver.ubuntu.com/pks/lookup?search=0x8EB29F72E600600C&fingerprint=on&op=index',
      },
    ],
  },
  {
    icon: <LinkedInIcon />,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/john-h-9bb97510a/',
  },
  {
    icon: <GitHubIcon />,
    text: 'GitHub',
    link: 'https://github.com/optimisticninja',
  },
];

const Connect = function Connect(): React.ReactElement {
  useDocumentTitle('Connect');

  const [developmentOpen, setDevelopmentOpen] = React.useState(false);
  const [recruitmentOpen, setRecruitmentOpen] = React.useState(false);

  const handleDevelopmentClick = ():void => {
    setDevelopmentOpen(!developmentOpen);
  };

  const handleRecruitmentClick = ():void => {
    setRecruitmentOpen(!recruitmentOpen);
  };

  return (
    <>
      <Typography variant="h3">Connect with me</Typography>
      <Typography>
        If you&#39;d like to reach out, don&#39;t hesitate to connect over any
        of these platforms. I&#39;d love to network or just chat about cool
        things.
      </Typography>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {contactLinks.map((entry) => (entry.extra !== undefined ? (
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            key={uuidv4()}
          >
            <ListItem
              onClick={
                  entry.text.includes('development')
                    ? handleDevelopmentClick
                    : handleRecruitmentClick
                }
              key={uuidv4()}
            >
              <ListItemText primary={entry.text} />
              {(
                entry.text.includes('development')
                  ? developmentOpen
                  : recruitmentOpen
              ) ? (
                <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
            </ListItem>
            <Collapse
              in={
                  entry.text.includes('development')
                    ? developmentOpen
                    : recruitmentOpen
                }
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {entry.extra.map((extra) => (
                  <StyledA
                    href={extra.link}
                    target="_blank"
                    rel="noreferrer"
                    key={uuidv4()}
                  >
                    <ListItem sx={{ pl: 4 }} button>
                      <ListItemIcon>{extra.icon}</ListItemIcon>
                      <ListItemText primary={extra.text} />
                    </ListItem>
                  </StyledA>
                ))}
              </List>
            </Collapse>
          </List>
        ) : (
          <StyledA
            href={entry.link}
            target="_blank"
            rel="noreferrer"
            key={entry.text}
          >
            <ListItem button>
              <ListItemIcon>{entry.icon}</ListItemIcon>
              <ListItemText>{entry.text}</ListItemText>
            </ListItem>
          </StyledA>
        )))}
      </List>
    </>
  );
};

export default Connect;
